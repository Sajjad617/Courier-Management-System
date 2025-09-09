import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { zoneVM } from 'src/app/Models/location.model';
import { HttpClientConnection } from 'src/app/services/httpClientConnection.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-zonee',
imports: [CommonModule, FormsModule],
  templateUrl: './zonee.html',
  styleUrl: './zonee.scss'
})
export class Zonee {
  city_data : any[] = [];
  rcv_zone_data : any[] = [];
  zone_data = new zoneVM();
  buttoname = "Save Zone";

  constructor(private apilink: HttpClientConnection ) {
    this.citymenu();
    this.getzonedata();

  }
  EditClick(ZoneId: number) {
    if(ZoneId>0){
      this.buttoname = "Update Zone";
      this.apilink.GetData(`Location/getZonebyid?id=${ZoneId}`)
      .subscribe((data:any)=>{
        this.zone_data = data;
    });

    }
  }
  rmvzone(id: number) {
    debugger
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this record!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.isConfirmed) {
        this.apilink.DeleteData('Location/DeleteZone?id=' + id).subscribe({
          next: (res) => {
            Swal.fire({
              icon: 'success',
              title: 'Zone deleted successfully!',
              timer: 2000,
              showConfirmButton: false,
              position: 'top-end',
              toast: true
            });
            this.getzonedata();
          },
          error: (err) => {
            Swal.fire({
              icon: 'error',
              title: 'Error while deleting zone!',
              text: err.message || 'Something went wrong.'
            });
          }
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire({
          icon: 'info',
          title: 'Cancelled',
          text: 'Your record is safe :)',
          timer: 2000,
          showConfirmButton: false,
          position: 'top-end',
          toast: true
        });
      }
    }
    );
  }
  getzonedata(){
    this.apilink.GetData('Location/getAllZone').subscribe((response: any) => {
      this.rcv_zone_data = response;
      console.log('Zone data retrieved successfully:', this.zone_data);
      // alert('Zone data retrieved successfully');
    }, (error: any) => {
      console.error('Error retrieving zone data:', error);
    });
  }
  citymenu(){
    this.apilink.GetData('Location/getAllCity').subscribe((response: any) => {
      this.city_data = response;
      console.log('City data retrieved successfully:', this.city_data);
      // alert('City data retrieved successfully');
    }, (error: any) => {
      console.error('Error retrieving city data:', error);
    });
  }

  // Zone Submit
  zonesubmit(form: any) {
  if (form.invalid) {
    return; // form invalid হলে submit হবে না
  }
debugger;
  this.apilink.PostData('Location/Zonesave', this.zone_data).subscribe({
    next: (res) => {
      Swal.fire({
        icon: 'success',
        title: 'Zone saved successfully!',
        timer: 2000,
        showConfirmButton: false,
        position: 'top-end',
        toast: true
      });
      this.getzonedata();
      form.reset(); // save এর পর form clear হবে
    },
    error: (err) => {
      Swal.fire({
        icon: 'error',
        title: 'Error while saving zone!',
        text: err.message || 'Something went wrong.'
      });
    }
  });
}

  private showSuccess(message: string) {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: 'success',
        title: message
      });
    }
}

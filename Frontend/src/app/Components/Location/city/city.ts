import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { commonVM } from 'src/app/Models/commonVM.model';
import { HttpClientConnection } from 'src/app/services/httpClientConnection.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-city',
  imports: [CommonModule, FormsModule],
  templateUrl: './city.html',
  styleUrl: './city.scss'
})
export class City {
  data = new commonVM();
  getdata: any[] = [];
  buttoname = 'Create';
  constructor(
    private apilink: HttpClientConnection,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.getcitydata();
  }

  rmv(cityId: number) {
    Swal.fire({
      title: 'Are you sure you want to delete this City?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        this.apilink.DeleteData(`Location/DeleteCity?id=${cityId}`).subscribe({
          next: () => {
            this.getcitydata();

            Swal.fire('Deleted!', 'City has been deleted.', 'success');
            // this.rcv_data = this.rcv_data.filter(p => p.parcelId !== ParcelId);
          },
          error: (err) => {
            console.error('Error deleting City', err);
            Swal.fire('Error!', 'Failed to delete City.', 'error');
          }
        });
      }
    });
    //   this.apilink.DeleteData(`Location/DeleteCity?id=${cityId}`).subscribe({
    //     next: () => {
    //       this.getcitydata();
    //       alert('City deleted successfully');
    //     },
    //     error: (err) => {
    //       console.error('Error deleting city', err);
    //     }
    // });
  }

  getcitydata() {
    this.apilink.GetData('Location/getAllCity').subscribe(
      (response: any) => {
        this.getdata = response;
        console.log('City data retrieved successfully:', this.getdata);
        // alert('City data retrieved successfully');
      },
      (error: any) => {
        console.error('Error retrieving city data:', error);
      }
    );
  }

  EditClick(cityId: number) {
    debugger;
    if (cityId > 0) {
      this.buttoname = 'Update';
      this.apilink.GetData(`Location/getCityById?id=${cityId}`).subscribe((data: any) => {
        this.data = data; // ফর্মে populate হবে
      });
    }
  }

  citysubmit(form: any) {
    if (form.invalid) {
      // শুধু error দেখাবে, সাবমিট ব্লক করবে
      return;
    }

    this.apilink.PostData('Location/citysave', this.data).subscribe({
      next: (res) => {
        // alert("City saved successfully!");
        form.reset();
        this.getcitydata();
        if (this.data.id > 0) {
          this.showSuccess('City Update successfully!');
        } else {
          this.showSuccess('City saved successfully!');
        }
      },
      error: (err) => {
        alert('Error while saving city!');
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

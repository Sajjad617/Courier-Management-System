import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PercelVM } from 'src/app/Models/percel-vm.model';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
import { HttpClientConnection } from 'src/app/services/httpClientConnection.service';

@Component({
  selector: 'app-new-parcel',
  imports: [FormsModule, HttpClientModule, RouterLink],
  templateUrl: './new-parcel.html',
  styleUrl: './new-parcel.scss'
})
export class NewParcel {
  parcel_data = new PercelVM();

  saveButtonName : string = 'Create Parcel';

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,   // ✅ query param ধরার জন্য
    private dataService : HttpClientConnection
  ) {}

  ngOnInit() {
    // ✅ query param catch

    debugger;
    this.route.queryParams.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.saveButtonName = 'Update parcel'
        // GetById API কল
        this.dataService.GetData(`Marcent/GetParcelById?id=${id}`)
          .subscribe((data: any) => {
            this.parcel_data = data; // ফর্মে populate হবে
            //Sweet Start

            //Sweet End
          });

      }
      else{
        this.saveButtonName = 'Create parcel'
      }
    });
  }

  Parcelsubmit() {
    debugger
    this.parcel_data.Status = 1;
     this.dataService.PostData('Marcent/ParcelSave', this.parcel_data).subscribe({
        next: (res) => {

          if(this.parcel_data.ParcelId > 0){
            this.showSuccess('Update successfully');
          }else{
            this.showSuccess('Added successfully');
          }

          this.router.navigate(['/all-parcel']);
        },
        error: (err) => {
          console.error('Error:', err);
          alert('Failed to save data.');
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
    // if (this.parcel_data.parcelId) {
    //   this.http.put('https://localhost:7054/api/Marcent/ParcelUpdate', this.parcel_data).subscribe({
    //     next: (res) => {
    //       this.showSuccess('Updated successfully');
    //       this.router.navigate(['/all-parcel']);
    //     },
    //     error: (err) => {
    //       console.error('Error:', err);
    //       alert('Failed to update data.');
    //     }
    //   });
    // } else {
    //   this.http.post('https://localhost:7054/api/Marcent/ParcelSave', this.parcel_data).subscribe({
    //     next: (res) => {
    //       this.showSuccess('Added successfully');
    //       this.router.navigate(['/all-parcel']);
    //     },
    //     error: (err) => {
    //       console.error('Error:', err);
    //       alert('Failed to save data.');
    //     }
    //   });
    // }

}

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
  rcv_area: any[] = [];
  rcv_city: any[] = [];
  rcv_zone: any[] = [];
  // create_button: string = 'Create Store';
  selectedCity: number | null = null;
  selectedZone: number | null = null;
  selectedArea: number | null = null;
  selectedStore: number | null = null;
  // DeliveyCharge: any = 0;
  saveButtonName: string = 'Create Parcel';
  rcv_store: any[] = [];
  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute, // ✅ query param ধরার জন্য
    private apilink: HttpClientConnection
  ) {}

  ngOnInit() {
    // ✅ query param catch
    this.get_city();
    this.get_store();
    debugger;
    this.route.queryParams.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.saveButtonName = 'Update parcel';
        // GetById API কল
        this.apilink.GetData(`Marcent/GetParcelById?id=${id}`).subscribe((data: any) => {
          this.parcel_data = data; // ফর্মে populate হবে
          console.log(this.parcel_data);
          // LOcation Edit
          this.selectedArea = this.parcel_data.DeliveryLocation;
          this.selectedCity = data.CityId;
          this.onCityChange();
          this.selectedZone = data.zoneId;
          this.onZoneChange();
          this.ondeliveryChargeadd();
          //Sweet Start

          //Sweet End
        });
      } else {
        this.saveButtonName = 'Create parcel';
      }
    });
  }
  ondeliveryChargeadd(event?: any) {
    // debugger
    let dl = Number(this.parcel_data.DeliveryLocation);
    // abcd.ToInt();
    let pl = this.parcel_data.PickupLocation;
    let w = Number(this.parcel_data.Weight);

    this.apilink.GetData(`Marcent/GetPrice?PickupLocation=${pl}&DeliveryLocation=${dl}&Weight=${w}`).subscribe((data: any) => {
      this.parcel_data.DeliveyCharge = data.price;
      console.log('Get Delivery charge');
      console.log(this.parcel_data.DeliveyCharge);
    });
  }
  get_store() {
    this.apilink.GetData('Store/GetStore').subscribe((data: any) => {
      this.rcv_store = data;
      // this.router.navigate("/Store-All-Data");
    });
  }
  get_city() {
    this.apilink.GetData('Location/getAllCity').subscribe((data: any) => {
      this.rcv_city = data;
    });
  }
  onCityChange(event?: any) {
    // debugger;
    if (event) {
      this.selectedCity = event.target.value;
    }
    this.apilink.GetData('Location/getZoneByCityId?id=' + this.selectedCity).subscribe((data: any) => {
      this.rcv_zone = data;
      // this.rcv_area = [];
    });
  }

  onZoneChange(event?: any) {
    if (event) {
      this.selectedZone = event.target.value;
    }

    this.apilink.GetData('Location/getAreaByZoneId?id=' + this.selectedZone).subscribe((data: any) => {
      this.rcv_area = data;
    });
  }
  Parcelsubmit() {
    debugger;
    this.parcel_data.Status = 1;
    // this.parcel_data.DeliveyCharge = this.DeliveyCharge;
    this.apilink.PostData('Marcent/ParcelSave', this.parcel_data).subscribe({
      next: (res) => {
        if (this.parcel_data.ParcelId > 0) {
          this.showSuccess('Update successfully');
        } else {
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

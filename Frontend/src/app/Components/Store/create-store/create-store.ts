// import { HttpClientModule } from '@angular/common/module.d';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

import { StoreVM } from 'src/app/Models/StoreVM.model';
import { HttpClientConnection } from 'src/app/services/httpClientConnection.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-store',
  imports: [FormsModule, RouterLink],
  templateUrl: './create-store.html',
  styleUrl: './create-store.scss'
})
export class CreateStore {
  store_data = new StoreVM();
  rcv_area: any[] = [];
  rcv_city: any[] = [];
  rcv_zone: any[] = [];
  create_button: string = 'Create Store';
  selectedCity: number | null = null;
  selectedZone: number | null = null;
  selectedArea: number | null = null;

  constructor(
    private apilink: HttpClientConnection,
    private router: Router,
    private route: ActivatedRoute // ✅ query param ধরার জন্য
  ) {
    this.editalldata();
    this.get_city();
  }
  editalldata() {
    this.route.queryParams.subscribe((params) => {
      const id = params['id'];
      if (id) {
        // GetById API কল
        this.create_button = 'Update Store';
        this.apilink.GetData(`Store/GetbyIdStore?id=${id}`).subscribe((data: any) => {
          debugger;
          this.store_data = data; // ফর্মে populate হবে
          this.selectedArea = this.store_data.AreaId;
          this.selectedCity = data.CityId;
          this.onCityChange();
          this.selectedZone = data.zoneId;
          this.onZoneChange();
          console.log(data);
          //Sweet Start

          //Sweet End
        });
      } else {
        this.create_button = 'Create Store';
      }
    });
  }

  storesubmit() {
    debugger;
    this.apilink.PostData('Store/SaveStore', this.store_data).subscribe({
      next: (res) => {
        // alert("Store Created Successfully");
        this.showSuccess('Added successfully');
        this.router.navigate(['/Store-All-Data']);
      },
      error: (err) => {
        alert('Error while creating store');
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

  get_city() {
    this.apilink.GetData('Location/getAllCity').subscribe((data: any) => {
      this.rcv_city = data;
    });
  }
  onCityChange(event?: any) {
    debugger;
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
}

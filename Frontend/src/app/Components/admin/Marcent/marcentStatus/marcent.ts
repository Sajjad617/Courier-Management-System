import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HttpClientConnection } from 'src/app/services/httpClientConnection.service';

@Component({
  selector: 'app-marcent',
  imports: [RouterLink, CommonModule],
  templateUrl: './marcent.html',
  styleUrl: './marcent.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Marcent implements OnInit {
  unApp_rcv_data: any[] = [];
  app_rcv_data: any[] = [];

  isModalOpen: boolean = false;
  selectedItem: any = null;

  constructor(private apilink: HttpClientConnection) {}

  ngOnInit(): void {
    this.getallmarcent();
    this.getallmarcent(true);
  }

  rmv(Id: number) {
    this.apilink.DeleteData(`Administrator/DeleteSignup?id=${Id}`).subscribe({
      next: () => {
        this.getallmarcent();
        this.getallmarcent(true);
      },
      error: (err) => {
        console.error('Error deleting marcent', err);
      }
    });
  }

  getallmarcent(val: boolean = false) {
    this.apilink.GetData(`Administrator/GetSignup?approve=${val}`).subscribe((data: any) => {
      if (val) {
        this.app_rcv_data = data;
      } else {
        this.unApp_rcv_data = data;
      }
    });
  }

  Updateapproved(Id: number, approve: boolean) {
    this.apilink.GetData(`Administrator/Updateapprove?id=${Id}&approve=${approve}`).subscribe({
      next: () => {
        this.ngOnInit();
      }
    });
  }

  // ✅ View Button Handler
  MarcentView(Id: number) {

    this.apilink.GetData(`Administrator/GetSignupById?id=${Id}`).subscribe((data: any) => {
      this.selectedItem = data;
      this.isModalOpen = true;
    });
  }

  closeModal() {
    this.isModalOpen = false;
    this.selectedItem = null;
  }
}

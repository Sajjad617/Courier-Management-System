import { Component } from '@angular/core';
import { HttpClientConnection } from 'src/app/services/httpClientConnection.service';

@Component({
  selector: 'app-confirm',
  imports: [],
  templateUrl: './confirm.html',
  styleUrl: './confirm.scss'
})
export class Confirm {
  rcv_data: any[] = [];
  id: number = 0;
  constructor(private apilink: HttpClientConnection) {
    this.getpendingdata();
  }
  getpendingdata() {
    debugger;
    this.apilink.GetData(`Marcent/ParcelStatus?id=2`).subscribe((data: any) => {
      this.rcv_data = data;
    });
  }
  update(Id: number, statusId: number = 3) {
    this.apilink.updateParcelStatus(Id, statusId).subscribe(() => {
      this.getpendingdata();
    });
    // this.getpendingdata(); 
  }
}

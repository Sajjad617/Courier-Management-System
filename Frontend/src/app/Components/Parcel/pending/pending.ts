import { Component } from '@angular/core';
import { HttpClientConnection } from 'src/app/services/httpClientConnection.service';

@Component({
  selector: 'app-pending',
  imports: [],
  templateUrl: './pending.html',
  styleUrl: './pending.scss'
})
export class Pending {
  rcv_data: any [] = [];
  id: number=0;
  constructor(private apilink:HttpClientConnection)
  {
    this.getpendingdata();
  }
  getpendingdata()
  {
    debugger
    this.apilink.GetData(`Marcent/ParcelStatus?id=1`).subscribe((data:any)=>
    {
      this.rcv_data=data;
    });
  }
  update(Id: number, statusId: number = 2) {
    this.apilink.updateParcelStatus(Id, statusId).subscribe(() => {
      this.getpendingdata();
    });
  }
}

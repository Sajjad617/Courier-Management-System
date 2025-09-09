import { Component } from '@angular/core';
import { HttpClientConnection } from 'src/app/services/httpClientConnection.service';

@Component({
  selector: 'app-delivered',
  imports: [],
  templateUrl: './delivered.html',
  styleUrl: './delivered.scss'
})
export class Delivered {
 rcv_data: any [] = [];
  id: number=0;
  constructor(private apilink:HttpClientConnection)
  {
    this.getpendingdata();
  }
  getpendingdata()
  {
    debugger
    this.apilink.GetData(`Marcent/ParcelStatus?id=4`).subscribe((data:any)=>
    {
      this.rcv_data=data;
    });
  }
  update(Id: number, statusId: number = 5) {
    this.apilink.updateParcelStatus(Id, statusId).subscribe(() => {
      this.getpendingdata();
    });
  }
}

import { Component } from '@angular/core';
import { HttpClientConnection } from 'src/app/services/httpClientConnection.service';

@Component({
  selector: 'app-returned',
  imports: [],
  templateUrl: './returned.html',
  styleUrl: './returned.scss'
})
export class Returned {
 rcv_data: any [] = [];
  id: number=0;
  constructor(private apilink:HttpClientConnection)
  {
    this.getpendingdata();
  }
  getpendingdata()
  {
    debugger
    this.apilink.GetData(`Marcent/ParcelStatus?id=5`).subscribe((data:any)=>
    {
      this.rcv_data=data;
    });
  }
  update(Id: number, statusId: number = 6) {
    this.apilink.updateParcelStatus(Id, statusId).subscribe(() => {
      this.getpendingdata();
    });
  }
}

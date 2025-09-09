import { Component } from '@angular/core';
import { HttpClientConnection } from 'src/app/services/httpClientConnection.service';

@Component({
  selector: 'app-picked',
  imports: [],
  templateUrl: './picked.html',
  styleUrl: './picked.scss'
})
export class Picked {
  rcv_data: any [] = [];
  id: number=0;
  constructor(private apilink:HttpClientConnection)
  {
    this.getpendingdata();
  }
  getpendingdata()
  {
    debugger
    this.apilink.GetData(`Marcent/ParcelStatus?id=3`).subscribe((data:any)=>
    {
      this.rcv_data=data;
    });
  }
  update(Id: number, statusId: number = 4) {
    this.apilink.updateParcelStatus(Id, statusId).subscribe(() => {
      this.getpendingdata();
    });
  }
}

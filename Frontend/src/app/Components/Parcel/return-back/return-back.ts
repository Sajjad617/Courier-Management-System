import { Component } from '@angular/core';
import { HttpClientConnection } from 'src/app/services/httpClientConnection.service';

@Component({
  selector: 'app-return-back',
  imports: [],
  templateUrl: './return-back.html',
  styleUrl: './return-back.scss'
})
export class ReturnBack {
 rcv_data: any [] = [];
  id: number=0;
  constructor(private apilink:HttpClientConnection)
  {
    this.getpendingdata();
  }
  getpendingdata()
  {
    debugger
    this.apilink.GetData(`Marcent/ParcelStatus?id=6`).subscribe((data:any)=>
    {
      this.rcv_data=data;
    });
  }

}

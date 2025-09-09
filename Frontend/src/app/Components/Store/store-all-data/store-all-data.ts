import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { HttpClientConnection } from 'src/app/services/httpClientConnection.service';

@Component({
  selector: 'app-store-all-data',
  imports: [RouterLink],
  templateUrl: './store-all-data.html',
  styleUrl: './store-all-data.scss'
})
export class StoreAllData {
  rcv_store: any[] = [];
  constructor(private apilink:HttpClientConnection, private router:Router) {
    this.get_store();
  }
  editstore(storeId: number) {
    this.router.navigate(['/create-store'], { queryParams: { id: storeId } });
  }
  
  get_store(){
    this.apilink.GetData('Store/GetStore').subscribe((data:any)=>{
      this.rcv_store = data;
      // this.router.navigate("/Store-All-Data");
    });
  }
}

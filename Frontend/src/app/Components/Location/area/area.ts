import { CommonModule, Location } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { commonVM } from 'src/app/Models/commonVM.model';
import { areaVM, zoneVM } from 'src/app/Models/location.model';
import { HttpClientConnection } from 'src/app/services/httpClientConnection.service';

@Component({
  selector: 'app-area',
  imports: [FormsModule, HttpClientModule, CommonModule],
  templateUrl: './area.html',
  styleUrl: './area.scss'
})
export class Area {
  buttoname = 'Save';
  area_data = new areaVM
  rcv_area_data: any[] = [];
  zone_data: any[] = [];
  priceplanarea: any[]=[];
  status: boolean = true;
// data = new commonVM();

constructor(private http:HttpClient, private apilink:HttpClientConnection){
  this.get_area_data();
  this.getzonedata();
  this.GetPricePlanArea();

};

GetPricePlanArea(){
  this.apilink.GetData('PricingPlan/GetPricingPlanArea').subscribe((data:any) => {
    this.priceplanarea = data;
  })
}
toogle(AreaId:any, statusAction:any){

if(statusAction == "Active"){
  this.status = true;
}
else{
  this.status = false;
}
  this.apilink.GetData(`Location/status?id=${AreaId}&status=${this.status}`).subscribe((data:any)=>{
    // alert("Status Changed");
    this.status = data;
    this.get_area_data();
  })

}
rmvarea(AreaId:any){
  debugger
  this.apilink.DeleteData(`Location/DeleteArea?id=${AreaId}`).subscribe((data:any)=>{
    alert("Deleted Successfully");
    this.get_area_data();
  })
}

get_area_data(){
  this.apilink.GetData('Location/getallarea').subscribe((data:any)=>{
    this.rcv_area_data = data;
  });
}

getzonedata(){
  this.apilink.GetData('Location/getallzone').subscribe((data:any)=>{
    this.zone_data = data;
  })
}
Areasubmit(form: any){
  if (form.invalid) {
    return; // form invalid হলে submit হবে না
  }
  debugger
  this.apilink.PostData('Location/areasave', this.area_data).subscribe({
    next: (res) => {
      // alert('Success');
      form.resetForm(); // form submit হলে form reset হবে
      this.get_area_data();

    },
    error: (err) => {
      alert('Failed to save data');
    }
  })
}

// areasumit(){
//   debugger;

//   this.apilink.PostData('Location/citysave', this.data).subscribe({
//     next: (res) => {
//       alert('Success');
//     },
//     error: (err) => {
//       alert('Failed to save data');
//     }
//   })
// }
}

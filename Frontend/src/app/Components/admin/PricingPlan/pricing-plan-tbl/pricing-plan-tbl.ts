import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { HttpClientConnection } from 'src/app/services/httpClientConnection.service';

@Component({
  selector: 'app-pricing-plan-tbl',
  imports: [RouterLink],
  templateUrl: './pricing-plan-tbl.html',
  styleUrl: './pricing-plan-tbl.scss'
})
export class PricingPlanTbl implements OnInit{
  pricingPlanData: any[] = [];

  constructor(private apilink:HttpClientConnection, private router:Router) { }
  ngOnInit(): void {
    this.apilink.GetData('PricingPlan/GetPricingPlan').subscribe((data:any)=>{
      this.pricingPlanData = data;
    });
  }
  
  EditClick(id:any){
    this.router.navigate(['/pricing-plan-form'], {queryParams: {Id: id}})
  }

  rmv(id:any){
    debugger
    this.apilink.DeleteData(`PricingPlan/DeletePricingPlan?id=${id}`).subscribe({
      next:()=>{
        this.ngOnInit();
    },
      error:(err)=>{
        console.error('Error deleting Pricing Plan', err);
      }
    });
  }

}

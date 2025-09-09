import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { PricingPlanVM } from 'src/app/Models/PricingPlanVM.model';
import { HttpClientConnection } from 'src/app/services/httpClientConnection.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pricing-plan-form',
  imports: [RouterLink, FormsModule],
  templateUrl: './pricing-plan-form.html',
  styleUrl: './pricing-plan-form.scss'
})
export class PricingPlanForm implements OnInit {
  Submit_Button = 'Submit Price Plan';
  PricingPlanData = new PricingPlanVM();
  GetPricingPlanAreas: any[] = [];
  constructor(
    private apilink: HttpClientConnection,
    private route: ActivatedRoute,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const id = params['Id'];
      if (id) {
        this.Submit_Button = 'Update Price Plan';
        this.apilink.GetData(`PricingPlan/GetPricingPlanbyID?id=${id}`).subscribe((data: any) => {
          this.PricingPlanData = data;
        });
      }
      // else{
      this.apilink.GetData('PricingPlan/GetPricingPlanArea').subscribe((data: any) => {
        this.GetPricingPlanAreas = data;
        console.log(this.GetPricingPlanAreas);
      });
      // }
    });
  }

  onsubmit() {
    debugger;
    this.apilink.PostData('PricingPlan/SavePricingPlan', this.PricingPlanData).subscribe((rec: any) => {
      if (this.PricingPlanData.Id > 0) {
        this.showSuccess('Update successfully');
      } 
      else {
        this.showSuccess('Added successfully');
      }

      this.router.navigate(['/pricing-plan-tbl']);
      // alert(rec.Result);
      console.log(this.PricingPlanData);
      this.PricingPlanData = new PricingPlanVM();
    });
  }

  private showSuccess(message: string) {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });
    Toast.fire({
      icon: 'success',
      title: message
    });
  }
}


import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { marcentVM } from 'src/app/Models/marcentVM.model';
import { HttpClientConnection } from 'src/app/services/httpClientConnection.service';
import Swal from 'sweetalert2';
// import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  imports: [FormsModule,HttpClientModule],
  templateUrl: './signup.html',
  styleUrl: './signup.scss'
})
export class Signup {
    // private Router = inject(HttpClient);

  // signup_data = {
  //   companyName: '',
  //   ownerName: '',
  //   mobile: '',
  //   email: '',
  //   Password: ''
  // };
  // Router: any;
  signup_data = new marcentVM();
  constructor(private http:HttpClient,private router:Router, private dataService:HttpClientConnection){}

  onsubmit(){
    debugger;
    console.log('Without Marcent', this.signup_data);
    this.signup_data.Type = "mercent";
    console.log('With Marcent', this.signup_data);
    // if(this.signup_data.Password != null){}
    this.dataService.PostData('Administrator/signup', this.signup_data).subscribe({
      next: (res) =>{
        console.log('Api response', res);
        // alert("Registraion Successfuly");
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          }
        });
        Toast.fire({
          icon: "success",
          title: "Registration successfully"
        });
        // Sweet Alert END
        this.router.navigate(['/login']);
      },
      error: (err) => {
          console.error('Error:', err);
          alert('Failed to save data.');
      },
    });
  }
}


import { HttpClient, HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClientConnection } from 'src/app/services/httpClientConnection.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  imports: [HttpClientModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  login_data = {
    Email: '',
    Password: ''
  }
    // private http = inject(HttpClient);
// constructor(private http:HttpClient){}


constructor(private http:HttpClient,private router:Router, private dataService:HttpClientConnection){}

onsubmit(){
  console.log('Login ', this.login_data);
  this.dataService.PostData('Administrator/login', this.login_data).subscribe(
    (data:any) =>{
      console.log(data);
      if(data.data.Result == this.login_data.Email){
        // alert('Login Successfuly');
        localStorage.setItem('token', data.token);
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
          title: "Login successfully"
        });
        //Sweet Alert END
        // this.router.navigate(['/signin']);
        this.router.navigate(['/analytics'])

      }
      else{
        alert('Invalid Email or Password');
      }
    },
    (error: HttpErrorResponse) =>{
      alert('Server Side error')
    }
  );
}
}

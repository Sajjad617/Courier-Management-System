import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { marcentVM } from 'src/app/Models/marcentVM.model';
import { HttpClientConnection } from 'src/app/services/httpClientConnection.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-marcent',
  imports: [FormsModule, RouterLink],
  templateUrl: './create-marcent.html',
  styleUrl: './create-marcent.scss'
})
export class CreateMarcent {
  // signup_data = {
  //   companyName: '',
  //   ownerName: '',
  //   mobile: '',
  //   email: '',
  //   Password: ''
  // };
  signup_data = new marcentVM();

  constructor(private apilink:HttpClientConnection, private router:Router){}
   onsubmit(){
      debugger;
      console.log('login', this.signup_data);
      this.signup_data.Type = "mercent";
      // if(this.signup_data.Password != null){}
      this.apilink.PostData('Administrator/signup', this.signup_data).subscribe({
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
          this.router.navigate(['/marcent']);
        },
        error: (err) => {
            console.error('Error:', err);
            alert('Failed to save data.');
        },
      });
    }
}

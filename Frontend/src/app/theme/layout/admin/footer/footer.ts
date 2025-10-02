import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {
  constructor(private router:Router){}
  logout(){
    localStorage.clear();
    this.router.navigate(['/home']);
  }
}


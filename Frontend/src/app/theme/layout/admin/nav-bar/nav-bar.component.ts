// angular import
import { Component, output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

// project import
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { NavLeftComponent } from './nav-left/nav-left.component';
import { NavRightComponent } from './nav-right/nav-right.component';
import { SignalRService } from 'src/app/services/signalr.service';
import { HttpClientConnection } from 'src/app/services/httpClientConnection.service';

@Component({
  selector: 'app-nav-bar',
  imports: [SharedModule, NavLeftComponent, NavRightComponent, RouterModule, CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  // public props
  menuClass: boolean;
  collapseStyle: string;
  windowWidth: number;

  NavCollapse = output();
  NavCollapsedMob = output();
  private audio: HTMLAudioElement | null = null;
  // constructor
  constructor(
    private signalR: SignalRService,
    private apilink: HttpClientConnection
  ) 
  {
    this.menuClass = false;
    this.collapseStyle = 'none';
    this.windowWidth = window.innerWidth;
    this.signalR.startConnection();
    this.signalR.hubConnection.on;
    this.signalR.hubConnection.on('CreateNewParcel', (data: any) => {
      // this.apilink.GetData('Marcent/ParcelGet').subscribe((data:any)=>{

      // })

      alert('New Percel comming');
      if (this.audio) {
        this.audio.pause();
        this.audio = null;
      }

      this.audio = new Audio('../../../../../assets/audio/facebook_call.mp3');

      // user click/tap এর পরে play করতে হবে
      const playPromise = this.audio.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.log('Audio play failed due to autoplay policy. Waiting for user interaction.');

          // document এর first click event এ play করা হবে
          const handler = () => {
            this.audio!.play().catch((err) => console.error(err));
            document.removeEventListener('click', handler);
          };
          document.addEventListener('click', handler);
        });
      }
    });
  }

  // public method
  toggleMobOption() {
    this.menuClass = !this.menuClass;
    this.collapseStyle = this.menuClass ? 'block' : 'none';
  }

  navCollapse() {
    if (this.windowWidth >= 992) {
      this.NavCollapse.emit();
    }
  }

  navCollapseMob() {
    if (this.windowWidth < 992) {
      this.NavCollapsedMob.emit();
    }
  }
}

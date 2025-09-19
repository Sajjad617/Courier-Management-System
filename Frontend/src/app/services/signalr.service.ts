import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignalRService {
  public hubConnection!: signalR.HubConnection;
  public messageReceived = new Subject<string>();

  constructor() { }

  public startConnection() {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl('https://localhost:7054/chathub') // Backend hub URL
      .withAutomaticReconnect()
      .build();

    this.hubConnection
      .start()
      .then(() => console.log('SignalR connection started'))
      .catch(err => console.log('Error while starting SignalR connection: ' + err));

  }

//   private registerOnServerEvents(): void {
//     this.hubConnection.on('ReceiveMessage', (message: string) => {
//       this.messageReceived.next(message);
//     });
//   }

  // public sendMessage(message: string) {
  //   this.hubConnection.invoke('SendMessageToClients', message)
  //     .catch(err => console.error(err));
  // }
}

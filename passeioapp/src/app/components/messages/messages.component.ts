import { Component } from '@angular/core';

@Component({
  selector: 'app-messages',
  standalone: false,
  
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.scss'
})
export class MessagesComponent {
  
  message: string | null = null;
  type: 'success' | 'error' = 'success';

  show(message: string, type: 'success' | 'error' = 'success'){
    this.message = message;
    this.type = type;

    setTimeout(() => this.close(), 5000);
  }

  close() : void {
    this.message = null;
  }
}

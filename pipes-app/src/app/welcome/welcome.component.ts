
import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  today: Date = new Date();
  amount: number = 1234;
  message: string = 'Hello, Reshma!';
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './models';
import { AuthenticationService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'eko-vid-int';
  currentUser: User;

  constructor() { }


}

import { Component } from '@angular/core';
import { Comment, User } from './interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  users: User[] = [];
  comments: Comment[] = [];

  constructor() {}
}

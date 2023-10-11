import { Component } from '@angular/core';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { loginSuccess } from '../app-state/actions/user.actions';
import { AppState } from '../app-state/index'; 
import { initialUserState } from '../app-state/states/user.state';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  constructor(private router: Router, 
              private usersService: UsersService, 
              private store: Store<AppState>) {}

  inputData: string = '';
  isThisUserNotExists: boolean = false;

  inputDataChange(event: Event): void{
    const value = (event.target as HTMLInputElement).value
    this.inputData = value;
  }

  login(): void{
    this.usersService.getUser(this.inputData).subscribe(user => {
      if (user.length > 0) {
        console.log("ygot",user[0]);
        this.router.navigate(['/'])
        this.store.dispatch(loginSuccess({ user }));
        sessionStorage.setItem('userData', JSON.stringify(user[0]))
      } else {
        this.isThisUserNotExists = true;
        this.inputData = '';
      }
    })
  }
}

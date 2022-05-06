import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../core/services/authentication.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Ng2IzitoastService } from 'ng2-izitoast';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    public iziToast: Ng2IzitoastService,
    private fb: FormBuilder,
    private authenticationService: AuthenticationService
  ) {
    this.loginForm = this.fb.group({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  doAction() {
    this.authenticationService
      .login(this.loginForm.value.username, this.loginForm.value.password)
      .subscribe(result => {
        console.log(localStorage.getItem('user'));
        if (!localStorage.getItem('user')){
          this.showIziToast(
            `El usuario o el password son incorrectos, por favor intentelo nuevamente`
          );
        }
      });
  }

  showIziToast(itMsg: string) {
    this.iziToast.show({
      title: itMsg,
      timeout: 2000,
      color: 'red',
      position: 'topCenter',
    });
  }
}

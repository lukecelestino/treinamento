import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThfNotificationService } from '@totvs/thf-ui';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _login: LoginService, private _router: Router, private _thfNotification: ThfNotificationService) { }

  ngOnInit() {
  }

  onLoginMyAuctions(data){
    this._login.loginUser(data).subscribe(user => {
      this._thfNotification.success('Sucesso ao logar.');
      this._router.navigate(['auction']);
    }, error => {
     this._thfNotification.error('Usuário ou Senha Inválidos.');
    });
  }

}

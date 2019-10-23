import { Component, OnInit } from '@angular/core';
import { Scrumlogin } from '../scrumuser';
import { ScrumdataService } from '../scrumdata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _scrumdataService: ScrumdataService, private _router: Router) { }

  ngOnInit() {
  }

  // scrumUserLoginData = {}

  scrumUserLoginData = new Scrumlogin('', '', '');

  feedback = '';

  onLoginSubmit() {
    this._scrumdataService.login(this.scrumUserLoginData).subscribe(
      data => { 
        console.log('Successful!', data)
        localStorage.setItem('token', data.token)
        this._router.navigate(['/scrumboard'])
       },
      
       error => {
         console.log('Error!', error)
         this.feedback = 'Failed, Invalid Credentials' 
        }
    )
  }

}


import { Component, OnInit } from '@angular/core';
import { Scrumuser } from '../scrumuser';
import { ScrumdataService } from '../scrumdata.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private scrumdataService: ScrumdataService) { }

  ngOnInit() {
  }
  userTypes = ['Regular User', 'Project Owner'];
  scrumUserModel = new Scrumuser('', '', '', '', '', true);

  feedback = '';

    onSubmit() {
      console.log(this.scrumUserModel)
        this.scrumdataService.signup(this.scrumUserModel).subscribe(
          data => {
          console.log('Success!', data)
          this.feedback = 'Account Created Successfully' 
        },
          error => {
          console.error('Error!', error)
          this.feedback = 'SignUp Failed'
        }  
      )
    }
    
}


import { Component,OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginDetails } from './Credentials';
import { SignupService } from './signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  constructor(private form: FormBuilder,private signupservice: SignupService,private _router:Router){}
  loginDetailsList: LoginDetails[] = [];

  signin = this.form.group({
    'UserName':"",
    'Password':""
  });

  ngOnInit(): void {
    this.signupservice.getAPILoginDetails().subscribe(Response =>{
      this.loginDetailsList = Response;
      console.log(Response);
    });
  }
  templogindetail: LoginDetails | undefined;
  onSubmit(){
    this.loginDetailsList.forEach(element => {
      if(element.UserName==this.signin.value.UserName){
        if(element.Password==this.signin.value.Password){
          this._router.navigateByUrl('/crud');
        }
      }
    });
  }

}

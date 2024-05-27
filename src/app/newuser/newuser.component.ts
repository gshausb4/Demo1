import { Component } from '@angular/core';
import { NewUserService } from './newuser.service';
import { IUser } from './models/UserModel';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css']
})
export class NewuserComponent {
  UserDetail: IUser = {} as IUser;
  newUser: IUser = {} as IUser;
  count: number = 0;

  constructor(
    private newUserService: NewUserService,
    private formBuilder: FormBuilder,
    private router: Router
    ) { }


  //store the form details in a json file on submit
  onSubmit() {
    console.log(this.UserDetail);
    this.newUser.username = this.UserDetail.username;
    this.newUser.password = this.UserDetail.password;
    this.newUser.phone_number = this.UserDetail.phone_number;
    this.newUser.email = this.UserDetail.email;
    this.newUser.birth_date = this.UserDetail.birth_date;
    this.newUserService.writeData(this.newUser).subscribe
    (data => {
      console.log(data);
      this.count = this.count + 1;
      });
    this.newUserService.getUserData().subscribe( data => {
      console.log(data.length);
    });
    this.router.navigateByUrl("/Signup");
  }
}

import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrudComponent } from './crud/crud.component';
import { HeaderComponent } from './header/header.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    CrudComponent,
    HeaderComponent,
    WelcomeComponent,
    SignupComponent,
    
  ],
  imports: [ReactiveFormsModule, FormsModule,
    BrowserModule, HttpClientModule,
    AppRoutingModule,RouterModule.forRoot([
      {path:'Signup',component:SignupComponent},
      {path:'crud',component:CrudComponent},
      {path:'',component:WelcomeComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Demo1';
  Parent: string = "Inparent";
  popsparent(){
    console.log("hello");
  }
}

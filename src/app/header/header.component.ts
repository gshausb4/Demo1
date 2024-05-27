import { Component } from '@angular/core';
import { SessionStorageService } from '../Services/session-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  loggedIn: any;

  constructor(private sessionStorageService: SessionStorageService, private router: Router) { }

  ngOnInit(): void {
    // Retrieve the value from sessionStorage
    this.loggedIn = this.sessionStorageService.getItem('loggedIn');
    console.log(this.loggedIn); // This will log the retrieved value to the console
  }

  logout() {
    // Perform logout actions here, such as clearing sessionStorage, redirecting, etc.
    // For example:
    this.sessionStorageService.setItem('loggedIn',false);
    this.loggedIn = false;
    this.router.navigateByUrl('/Signup');
  }

  selectedTab: string = 'Home'; 
  

  // Initialize selected tab
  selectTab(tab: string) {
    this.selectedTab = tab; // Update selected tab
  }
}

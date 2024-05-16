import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  displaySignup: boolean = true;
  selectedTab: string = 'Home'; // Initialize selected tab

  selectTab(tab: string) {
    this.selectedTab = tab; // Update selected tab
  }
}

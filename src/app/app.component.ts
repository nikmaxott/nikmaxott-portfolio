import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'nikmaxott-portfolio';

  isDarkEnable = window.localStorage.getItem('theme') == 'dark';

  constructor() {
    if (
      localStorage.getItem('theme') === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      this.isDarkEnable = true;
    } else {
      this.isDarkEnable = false;
    }
  }

  toggleDarkMode() {
    this.isDarkEnable = !this.isDarkEnable;
    localStorage.setItem('theme', this.isDarkEnable ? 'dark' : 'light');
  }
}

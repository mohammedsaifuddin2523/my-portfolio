import { Component, OnInit } from '@angular/core';
import { ThemeService } from './theme.service';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit {
  isDarkMode = false;
 
  constructor(
    private themeService: ThemeService,
  ) { }
  ngOnInit() {
  this.themeService.darkMode$.subscribe(isDark => {
    this.isDarkMode = isDark;
    if (isDark) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  });
}
toggleDarkMode() {
  debugger;
  this.themeService.toggleDarkMode();
}
}

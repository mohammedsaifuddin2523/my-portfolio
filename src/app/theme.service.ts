import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private darkMode = new BehaviorSubject<boolean>(false);
  darkMode$ = this.darkMode.asObservable();

  constructor() {
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme) {
      this.darkMode.next(savedTheme === 'true');
    }
  }

  toggleDarkMode() {
    debugger;
    const currentMode = this.darkMode.value;
    this.darkMode.next(!currentMode);
    localStorage.setItem('darkMode', (!currentMode).toString());
  }

  setDarkMode(isDarkMode: boolean) {
    this.darkMode.next(isDarkMode);
    localStorage.setItem('darkMode', isDarkMode.toString());
  }
}

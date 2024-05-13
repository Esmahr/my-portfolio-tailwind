import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DarkmodeService {
  
  private darkModeSubject = new BehaviorSubject<boolean>(false);
  isDarkMode = this.darkModeSubject.asObservable();

  setDarkMode(isDark: boolean): void {
    this.darkModeSubject.next(isDark);
  }
}

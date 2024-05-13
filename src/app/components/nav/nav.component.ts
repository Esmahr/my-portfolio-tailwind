import { Component } from '@angular/core';
import { DarkmodeService } from '../../service/darkmode.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  constructor(private darkModeService: DarkmodeService
  ) {}

  toggleDarkMode(event: any) {
    const isChecked = event.target.checked;
    this.darkModeService.setDarkMode(isChecked);
    const htmlElement = document.documentElement;
    if (isChecked) {
      htmlElement.classList.add('dark');
    } else {
      htmlElement.classList.remove('dark');
    }
  }
}
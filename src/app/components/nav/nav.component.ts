import { Component } from '@angular/core';
import { DarkmodeService } from '../../service/darkmode.service';

@Component({
  selector: 'app-nav',
  template: `<nav class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 select-none">
  <div class="max-w-screen-xl mx-auto flex items-center justify-between p-3">
      <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse flip"><span class="dark:text-white self-center text-2xl font-bold whitespace-nowrap">Esma Harmancı</span></a>
      <ul class="flex flex-row justify-center space-x-8 font-medium rounded-lg border-0 bg-white dark:bg-gray-900 ">
          
          <li><a href="#" class="block py-2 px-3 text-[#59D5E0] rounded md:p-0" aria-current="page">Anasayfa</a></li>
          <li><a href="#abouth" class="block py-2 px-3 dark:text-white rounded hover:text-[#59D5E0] dark:hover:text-blue-700 md:p-0 text-[#F4538A]">Hakkımda</a></li>
          <li><a href="#projelerim" class="block py-2 px-3 dark:text-white rounded hover:text-[#59D5E0] dark:hover:text-blue-700 md:p-0 text-[#F4538A]">Projelerim</a></li>
      </ul>

      <div class="flex space-x-3 rtl:space-x-reverse">
          <label class="switch">
              <input type="checkbox" (change)="toggleDarkMode($event)">
              <span class="slider"></span>
          </label>
            
          <form class="max-w-sm mx-auto">
              <select id="countries" class="text-gray-900 dark:text-white dark:bg-transparent text-medium rounded-lg block w-15 p-0">
                  <option class="text-gray-900" selected value="US">Tr</option>
                  <option class="text-gray-900" value="US">Eng</option>
              </select>
          </form>
      </div>
  </div>
</nav>
`,
  styleUrl: './nav.component.css'
})
export class NavComponent {
  constructor(private darkModeService: DarkmodeService
  ) { }

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
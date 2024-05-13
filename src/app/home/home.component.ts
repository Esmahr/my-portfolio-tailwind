import { Component } from '@angular/core';
import { DarkmodeService } from '../service/darkmode.service';

@Component({
  selector: 'app-home',
  template: `
  <app-nav></app-nav>

  <div class="landing select-none" [ngClass]="isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'">
      <div class="min-h-screen flex items-center justify-around">
          <div class="landing-text">
  
              <h1 class="text-6xl font-bold leading-[3.7rem]">I'm a Frontend Developer</h1>
              <p class="text-gray-500 font-extrathin">Lorem ipsum dolor sit amet sed aut eaque aperiam assumenda pariatur ut praesentium repellat veniam atque.
                  Dolore saepe possimus temporibus vitae.</p>
          </div>
          <div class="landing-info flex">
              <div class="landing-info-img" style="width: 80%;"><img class="float-right rounded-full w-[25rem]" src="../../assets/photo.jpg" alt=""></div>
              <div class="landing-info-description">
                  <ul>
                      <li style="position: relative;
                      left: -2rem;">
                          <h2 class="text-5xl font-semibold">2+</h2>
                          <p class="text-gray-500 font-extrathin text-sm">Yıl deneyim</p>
                      </li>
                      <li style="position: relative;
                      left: 1rem;">
                          <h2 class="text-5xl font-semibold">12+</h2>
                          <p class="text-gray-500 font-extrathin text-sm">Tamamlanan proje</p>
                      </li>
                      <li style="position: relative;
                      left: 1rem;">
                          <h2 class="text-5xl font-semibold">364+</h2>
                          <p class="text-gray-500 font-extrathin text-sm">Gönderilen commit</p>
                      </li>
                      <li  style="position: relative;
                      left: -2rem;">
                          <h2 class="text-5xl font-semibold">7+</h2>
                          <p class="text-gray-500 font-extrathin text-sm">Bilinen teknoloji</p>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
  </div>
  
  `,
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  isDarkMode = false;

  constructor(private darkModeService: DarkmodeService) { }

  ngOnInit(): void {
    this.darkModeService.isDarkMode.subscribe((isDark) => {
      this.isDarkMode = isDark;
    });
  }
}

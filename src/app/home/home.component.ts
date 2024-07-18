import { Component, HostListener } from '@angular/core';
import { DarkmodeService } from '../service/darkmode.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  isDarkMode = false;
    isSticky: boolean | undefined;

  constructor(private darkModeService: DarkmodeService) {}

  ngOnInit(): void {
    this.darkModeService.isDarkMode.subscribe((isDark) => {
      this.isDarkMode = isDark;
    });
  }

  currentSlide = 0;
  images1 = [
    '../../assets/home-pr1/home.png',
    '../../assets/home-pr1/kategori.png',
    '../../assets/home-pr1/menu.png',
    '../../assets/home-pr1/siparis.png',
  ];

  images2 = [
    '../../assets/home-pr2/indir.png',
    '../../assets/home-pr2/indir1.png',
  ];

  images3 = [
    '../../assets/home-pr3/home (1).png',
    '../../assets/home-pr3/home.png',
    '../../assets/home-pr3/category.png',
  ];
}

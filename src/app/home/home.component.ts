import { Component, HostListener } from '@angular/core';
import { DarkmodeService } from '../service/darkmode.service';

@Component({
  selector: 'app-home',
  template: `<app-nav></app-nav>

  <div class="landing select-none" [ngClass]="isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'">
      <div class="min-h-screen flex items-center justify-around">
          <div class="landing-text">
              <h1 class="uppercase font-medium ml-[.4rem]">HI I AM</h1>
              <h1 class="uppercase font-medium text-pink-400 ml-[.4rem]">Esma Harmancı</h1>
              <h1 class="text-8xl font-bold leading-[5.5rem]">Frontend</h1>
              <h1 class="text-8xl font-bold leading-[5.5rem] text-pink-400">Developer</h1>
           <!--   <p class="text-gray-500 font-extrathin ml-[.4rem]">Lorem ipsum dolor sit amet sed aut eaque aperiam
                  assumenda pariatur
                  ut praesentium repellat veniam atque.
                  Dolore saepe possimus temporibus vitae.</p>-->
          </div>
          <div class="landing-info flex">
              <div class="landing-info-img" style="width: 80%;"><img class="float-right h-[27rem]"
                      src="../../assets/photo.jpg" alt=""></div>
              <div class="landing-info-description pl-5" style="width: 20%;">
                  <ul>
                      <li>
                          <h2 class="text-5xl font-semibold">2+</h2>
                          <p class="text-gray-500 font-extrathin text-sm">Yıl deneyim</p>
                      </li>
                      <li>
                          <h2 class="text-5xl font-semibold">12+</h2>
                          <p class="text-gray-500 font-extrathin text-sm">Tamamlanan proje</p>
                      </li>
                      <li>
                          <h2 class="text-5xl font-semibold">364+</h2>
                          <p class="text-gray-500 font-extrathin text-sm">Gönderilen commit</p>
                      </li>
                      <li>
                          <h2 class="text-5xl font-semibold">7+</h2>
                          <p class="text-gray-500 font-extrathin text-sm">Bilinen teknoloji</p>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <div class="container flex pt-[10rem] mb-[12rem]" id="abouth">
          <div class="circles flex">
              <div class="circle dribbble rounded-full bg-[#59D5E0]">
                  <span class="text-center uppercase">toplam<br>commit (2024)</span>
                  <span class="text-xl">96+</span>
              </div>
              <div class="circle behance bg-pink-400 rounded-full">
                  <span class="text-center text-xl uppercase">Github<br>Repositories</span>
                  <span class="text-2xl">21+</span>
              </div>
              <div class="circle linkedin rounded-full bg-[#F5DD61]">
                  <span class="uppercase text-sm text-center">LINKEDIN<br> bağlantısı</span>
                  <span class="text-md">1,977+</span>
              </div>
          </div>
          <div class="content mt-[4rem]">
              <h2 class="text-pink-400 uppercase">hakkımda</h2>
              <h1 class=" text-4xl mb-[1rem]">Frontend Geliştirici</h1>
              <p>Merhaba! Ben Esma, 2 yıllık tecrübeye sahip yazılımcıyım. Kullanıcı dostu çözümler
                  hedefleyerek, responsive web tasarımı geliştirme alanında çalışmaktayım. En son
                  teknoloji trendlerinden haberdar oluyorum ve yeni teknolojiler keşfetmeyi seviyorum.</p>
              <div class="contact-info mt-[2rem]">
                  <div class="pt-[20px] content-center flex">
                      <span class="mr-4 uppercase cursor-pointer "><a href="https://github.com/Esmahr" target="_blank"><i
                                  class='bx bxl-github bx-md'></i></a></span>
                      <span class="mr-4 uppercase cursor-pointer "><a
                              href="https://www.linkedin.com/in/esmaharmanc%C4%B1/" target="_blank"><i
                                  class='bx bxl-linkedin bx-md'></i></a></span>
                      <span class="mr-4 uppercase cursor-pointer "><a href="https://esmahr.medium.com/" target="_blank"><i
                                  class='bx bxl-medium bx-md'></i></a></span>
                  </div>
              </div>
          </div>
      </div>
      <div class="know-tech">
          <h1 class="text-4xl font-semibold leading-[5.5rem] ml-[8.7rem] mr-[8.7rem]">Bildiğim Teknolojiler</h1>
          <div class="flex overflow-hidden mb-[2rem] mt-[4rem]">
              <ng-container *ngFor="let _ of [1, 2, 3,]">
                  <app-knowlage-technologies img="../../assets/technologies-logos/html.png"></app-knowlage-technologies>
                  <app-knowlage-technologies img="../../assets/technologies-logos/css.png"></app-knowlage-technologies>
                  <app-knowlage-technologies img="../../assets/technologies-logos/Less.png"></app-knowlage-technologies>
                  <app-knowlage-technologies img="../../assets/technologies-logos/scss.png"></app-knowlage-technologies>
                  <app-knowlage-technologies img="../../assets/technologies-logos/boot.png"></app-knowlage-technologies>
                  <app-knowlage-technologies
                      img="../../assets/technologies-logos/tailwind.png"></app-knowlage-technologies>
                  <app-knowlage-technologies
                      img="../../assets/technologies-logos/angular.png"></app-knowlage-technologies>
                  <app-knowlage-technologies img="../../assets/technologies-logos/js.png"></app-knowlage-technologies>
                  <app-knowlage-technologies img="../../assets/technologies-logos/grunt.png"></app-knowlage-technologies>
              </ng-container>
          </div>
      </div>
      <div class="my-project pt-[10rem] ml-[8.7rem] mr-[8.7rem] pb-[4rem]" id="projelerim">
          <h1 class="text-4xl font-semibold leading-[5.5rem]">Projelerim</h1>
          <div class=" flex mt-[1rem] p-[2rem] border">
              <app-carousel [carouselId]="1" [images]="images1" class="w-[50%]"></app-carousel>
              <div class="desc pl-[2rem]">
                  <h1 class="text-2xl mb-[1rem]">Restoran Yönetim Sistemi</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat nostrum eos et quo distinctio
                      repudiandae recusandae dolor ipsa eaque, repellat nemo, odio perspiciatis consequuntur voluptatem
                      est, eligendi autem quis iusto.</p>
                  <div class="info text-sm mt-[1rem]">
                      <a href="#" class="logo"><i class='bx bxl-github bx-md'></i></a>
                  </div>
                  <div class="flex items-center flex-wrap">
                      <span
                          class="inline-flex items-center m-2 px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded-full text-sm font-semibold text-gray-600">HTML</span>
                      <span
                          class="inline-flex items-center m-2 px-3 py-1 bg-green-200 hover:bg-green-300 rounded-full text-sm font-semibold text-green-600">CSS</span>
                      <span
                          class="inline-flex items-center m-2 px-3 py-1 bg-red-200 hover:bg-red-300 rounded-full text-sm font-semibold text-red-600">Javascript</span>
                      <span
                          class="inline-flex items-center m-2 px-3 py-1 bg-yellow-200 hover:bg-yellow-300 rounded-full text-sm font-semibold text-yellow-600">Typescript</span>
                      <span
                          class="inline-flex items-center m-2 px-3 py-1 bg-blue-200 hover:bg-blue-300 rounded-full text-sm font-semibold text-blue-600">SCSS</span>
                  </div>
              </div>
          </div>
          <div class=" flex mt-[4rem] p-[2rem] border">
              <app-carousel [carouselId]="2" [images]="images2" class="w-[50%]"></app-carousel>
              <div class="desc pl-[2rem]">
                  <h1 class="text-2xl mb-[1rem]">Restoran Yönetim Sistemi</h1>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat nostrum eos et quo distinctio
                      repudiandae recusandae dolor ipsa eaque, repellat nemo, odio perspiciatis consequuntur voluptatem
                      est, eligendi autem quis iusto.</p>
                  <div class="info text-sm mt-[1rem]">
                      <a href="#" class="logo"><i class='bx bxl-github bx-md'></i></a>
                  </div>
                  <div class="flex items-center flex-wrap">
                      <span
                          class="inline-flex items-center m-2 px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded-full text-sm font-semibold text-gray-600">HTML</span>
                      <span
                          class="inline-flex items-center m-2 px-3 py-1 bg-green-200 hover:bg-green-300 rounded-full text-sm font-semibold text-green-600">CSS</span>
                      <span
                          class="inline-flex items-center m-2 px-3 py-1 bg-red-200 hover:bg-red-300 rounded-full text-sm font-semibold text-red-600">Javascript</span>
                      <span
                          class="inline-flex items-center m-2 px-3 py-1 bg-yellow-200 hover:bg-yellow-300 rounded-full text-sm font-semibold text-yellow-600">Typescript</span>
                      <span
                          class="inline-flex items-center m-2 px-3 py-1 bg-blue-200 hover:bg-blue-300 rounded-full text-sm font-semibold text-blue-600">SCSS</span>
                  </div>
              </div>
          </div>
          <div class="flex mt-[4rem] p-[2rem] border">
              <app-carousel [carouselId]="3" [images]="images3" class="w-[50%]"></app-carousel>
              <div class="desc pl-[2rem]">
                  <h1 class="text-2xl mb-[1rem]">Restoran Yönetim Sistemi</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat nostrum eos et quo distinctio
                      repudiandae recusandae dolor ipsa eaque, repellat nemo, odio perspiciatis consequuntur voluptatem
                      est, eligendi autem quis iusto.</p>
                  <div class="info text-sm mt-[1rem]">
                      <a href="#" class="logo"><i class='bx bxl-github bx-md'></i></a>
                  </div>
                  <div class="flex items-center flex-wrap">
                      <span
                          class="inline-flex items-center m-2 px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded-full text-sm font-semibold text-gray-600">HTML</span>
                      <span
                          class="inline-flex items-center m-2 px-3 py-1 bg-green-200 hover:bg-green-300 rounded-full text-sm font-semibold text-green-600">CSS</span>
                      <span
                          class="inline-flex items-center m-2 px-3 py-1 bg-red-200 hover:bg-red-300 rounded-full text-sm font-semibold text-red-600">Javascript</span>
                      <span
                          class="inline-flex items-center m-2 px-3 py-1 bg-yellow-200 hover:bg-yellow-300 rounded-full text-sm font-semibold text-yellow-600">Typescript</span>
                      <span
                          class="inline-flex items-center m-2 px-3 py-1 bg-blue-200 hover:bg-blue-300 rounded-full text-sm font-semibold text-blue-600">SCSS</span>
                  </div>
              </div>
          </div>
          <a class="text-decoration-none" target="_blank" href="https://github.com/Esmahr?tab=repositories">
              <h1 class="text-xl float-right mt-[1rem]">Daha Fazla <i class='bx bx-chevrons-right'></i></h1>
          </a>
      </div>
  
      <footer class="bg-white m-1 mt-[2rem] dark:bg-gray-800">
          <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
              <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://flowbite.com/"
                      class="hover:underline">Esma Harmancı</a>
              </span>
              <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                  <li>
                      <a href="#" class="hover:underline me-4 md:me-6">About</a>
                  </li>
                  <li>
                      <a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
                  </li>
                  <li>
                      <a href="#" class="hover:underline me-4 md:me-6">Licensing</a>
                  </li>
                  <li>
                      <a href="#" class="hover:underline">Contact</a>
                  </li>
              </ul>
          </div>
      </footer>
  
  </div>`,
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

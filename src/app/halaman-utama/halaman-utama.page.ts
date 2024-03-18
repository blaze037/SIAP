import { Component, OnInit } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { IonicSlides } from '@ionic/angular';

register();


@Component({
  selector: 'app-halaman-utama',
  templateUrl: './halaman-utama.page.html',
  styleUrls: ['./halaman-utama.page.scss'],
})
export class HalamanUtamaPage implements OnInit {
  swiperModules = [IonicSlides];

  constructor() { }

  ngOnInit() {
  }

}

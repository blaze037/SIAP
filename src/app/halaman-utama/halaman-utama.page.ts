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
  
  sports = [
    {
      name: "swimming",
      asset: ""
    },
    {
      name: "gaming",
      asset: ""
    },
    {
      name: "programming",
      asset: ""
    },
    {
      name: "running",
      asset: ""
    },
    {
      name: "excel",
      asset: ""
    }
  ]

  constructor() {
  }

  ngOnInit() {
  }

}

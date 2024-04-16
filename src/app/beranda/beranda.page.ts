import { Component, OnInit } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { IonicSlides } from '@ionic/angular';
register();
@Component({
  selector: 'app-beranda',
  templateUrl: './beranda.page.html',
  styleUrls: ['./beranda.page.scss'],
})
export class BerandaPage implements OnInit {
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
  ];
  constructor() { 
    
  }

  ngOnInit() {
  }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HalamanUtamaPageRoutingModule } from './halaman-utama-routing.module';

import { HalamanUtamaPage } from './halaman-utama.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HalamanUtamaPageRoutingModule
  ],
  declarations: [HalamanUtamaPage]
})
export class HalamanUtamaPageModule {}

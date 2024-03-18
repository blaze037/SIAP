import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HalamanUtamaPageRoutingModule } from './halaman-utama-routing.module';

import { HalamanUtamaPage } from './halaman-utama.page';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HalamanUtamaPageRoutingModule
  ],
  declarations: [HalamanUtamaPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HalamanUtamaPageModule {}

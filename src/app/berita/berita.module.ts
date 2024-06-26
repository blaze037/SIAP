import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BeritaPageRoutingModule } from './berita-routing.module';

import { BeritaPage } from './berita.page';
import { BeritaDetailPage } from './beritadetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BeritaPageRoutingModule
  ],
  declarations: [BeritaPage,BeritaDetailPage]
})
export class BeritaPageModule {}

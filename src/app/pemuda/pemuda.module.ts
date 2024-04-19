import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PemudaPageRoutingModule } from './pemuda-routing.module';

import { PemudaPage } from './pemuda.page';
import { PemudaDetailPage } from './pemudadetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PemudaPageRoutingModule
  ],
  declarations: [PemudaPage,PemudaDetailPage]
})
export class PemudaPageModule {}

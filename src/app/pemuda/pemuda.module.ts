import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PemudaPageRoutingModule } from './pemuda-routing.module';

import { PemudaPage } from './pemuda.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PemudaPageRoutingModule
  ],
  declarations: [PemudaPage]
})
export class PemudaPageModule {}

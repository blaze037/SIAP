import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PemudaPage } from './pemuda.page';
import { PemudaDetailPage } from './pemudadetail.page';

const routes: Routes = [
  {
    path: '',
    component: PemudaPage
  },{
    path: ':bidang',
    component: PemudaDetailPage
  },{
    path: ':bidang/:keyword',
    component: PemudaDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PemudaPageRoutingModule {}

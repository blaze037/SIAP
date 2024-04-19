import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OlahragaPage } from './olahraga.page';
import { OlahragaDetailPage } from './olahragadetail.page';

const routes: Routes = [
  {
    path: '',
    component: OlahragaPage
  },{
    path: ':cabor',
    component: OlahragaDetailPage
  },{
    path: ':cabor/:kategori/',
    component: OlahragaDetailPage
  },{
    path: ':cabor/:kategori/:keyword',
    component: OlahragaDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OlahragaPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BeritaPage } from './berita.page';
import { BeritaDetailPage } from './beritadetail.page';

const routes: Routes = [
  {
    path: '',
    component: BeritaPage
  },{
    path: ':id',
    component: BeritaDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BeritaPageRoutingModule {}

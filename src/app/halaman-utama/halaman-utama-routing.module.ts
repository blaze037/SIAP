import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HalamanUtamaPage } from './halaman-utama.page';

const routes: Routes = [
  {
    path: '',
    component: HalamanUtamaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HalamanUtamaPageRoutingModule {}

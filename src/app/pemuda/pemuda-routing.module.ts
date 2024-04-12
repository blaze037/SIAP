import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PemudaPage } from './pemuda.page';

const routes: Routes = [
  {
    path: '',
    component: PemudaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PemudaPageRoutingModule {}

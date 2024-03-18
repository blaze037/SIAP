import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'halaman-utama',
        loadChildren: () => import('../halaman-utama/halaman-utama.module').then(m => m.HalamanUtamaPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/halaman-utama',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/halaman-utama',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}

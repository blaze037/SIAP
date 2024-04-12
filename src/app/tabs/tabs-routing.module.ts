import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'beranda',
        loadChildren: () => import('../beranda/beranda.module').then(m => m.BerandaPageModule)
      },
      {
        path: 'olahraga',
        loadChildren: () => import('../olahraga/olahraga.module').then(m => m.OlahragaPageModule)
      },
      {
        path: 'pemuda',
        loadChildren: () => import('../pemuda/pemuda.module').then(m => m.PemudaPageModule)
      },
      {
        path: 'berita',
        loadChildren: () => import('../berita/berita.module').then(m => m.BeritaPageModule)
      },
      {
        path: 'kontak',
        loadChildren: () => import('../kontak/kontak.module').then(m => m.KontakPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/beranda',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/beranda',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}

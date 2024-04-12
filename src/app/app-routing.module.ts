import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },  {
    path: 'beranda',
    loadChildren: () => import('./beranda/beranda.module').then( m => m.BerandaPageModule)
  },
  {
    path: 'kontak',
    loadChildren: () => import('./kontak/kontak.module').then( m => m.KontakPageModule)
  },
  {
    path: 'olahraga',
    loadChildren: () => import('./olahraga/olahraga.module').then( m => m.OlahragaPageModule)
  },
  {
    path: 'pemuda',
    loadChildren: () => import('./pemuda/pemuda.module').then( m => m.PemudaPageModule)
  },
  {
    path: 'berita',
    loadChildren: () => import('./berita/berita.module').then( m => m.BeritaPageModule)
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

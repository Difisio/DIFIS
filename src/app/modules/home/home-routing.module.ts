import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
        import('./index/index.module').then(m => m.IndexModule)
      },
      {
        path: 'cart',
        loadChildren: () =>
        import('./cart/cart.module').then(m => m.CartModule)
      }              
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }



import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MeComponent } from './me.component';

const routes: Routes = [
  {
    path: '',
    component: MeComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
        import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule)
      }      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeRoutingModule { }
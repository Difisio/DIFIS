import { NgModule } from '@angular/core';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { NavComponent } from './layout/nav/nav.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UsersComponent } from './pages/users/users.component';
import { MerchantsComponent } from './pages/merchants/merchants.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductAddComponent } from './pages/product-add/product-add.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AdminComponent,
    FooterComponent,
    HeaderComponent,
    NavComponent,
    DashboardComponent,
    UsersComponent,
    MerchantsComponent,
    ProductsComponent,
    ProductAddComponent
  ],
  imports: [
    AdminRoutingModule,
    CommonModule,
    SharedModule,
    FormsModule
  ],
  providers: []
})
export class AdminModule { }

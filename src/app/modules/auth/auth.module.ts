import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AuthComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    AuthRoutingModule,
    SharedModule,
    FormsModule
  ],
  providers: []
})
export class AuthModule { }

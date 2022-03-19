import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth/auth.component';
import { RegisterComponent } from './register/register.component';
import { Routes } from '@angular/router';

export const PUBLIC_ROUTES: Routes = [
  { path: 'login' , component: AuthComponent },
  { path: 'register' , component: RegisterComponent },
];

@NgModule({
  declarations: [
    AuthComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PublicModule { }

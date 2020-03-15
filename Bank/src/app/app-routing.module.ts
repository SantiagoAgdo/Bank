import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "../app/home/home.component";
import { LoginComponent } from "../app/login/login.component";

import { RouteEnum } from "../app/utils/route-enum";


const routes: Routes = [
  { path: RouteEnum.LOGIN, component: LoginComponent },
  { path: RouteEnum.HOME, component: HomeComponent },
  { path: '', redirectTo: RouteEnum.LOGIN, pathMatch: 'full' },
  { path: '**', redirectTo: RouteEnum.LOGIN, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

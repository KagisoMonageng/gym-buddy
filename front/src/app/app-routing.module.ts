import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{ path: 'gym', loadChildren: () => import('./pages/landing/landing.module').then(m => m.LandingModule) },
{ path: '', loadChildren: () => import('./pages/gym/gym.module').then(m => m.GymModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

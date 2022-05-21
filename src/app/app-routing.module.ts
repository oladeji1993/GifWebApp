import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GifDetailsComponent } from './components/gif-details/gif-details.component';
import { LandingComponent } from './components/landing/landing.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
  },

  {
    path: 'details/:id',
    component: GifDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

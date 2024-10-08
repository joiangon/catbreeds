import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './pages/home/home.page';
import { BreedDetailPage } from './pages/breed-detail/breed-detail.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  },
  {
    path: 'breed/:id',
    component: BreedDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PresentationRoutingModule {}

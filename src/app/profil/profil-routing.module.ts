import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilPage } from './page/profil/profil.page';
import {DetailsComponent} from "./page/details/details.component";

const routes: Routes = [
  {
    // route par default
    path: '',
    component: ProfilPage
  },
  {
    // route avec paramètre
    path: 'details/:id',
    component: DetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodoPageRoutingModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TodoPageRoutingModule } from './profil-routing.module';

import { ProfilPage } from './page/profil/profil.page';
import {DisplayComponent} from "./component/display/display.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TodoPageRoutingModule
  ],
    declarations: [ProfilPage, DisplayComponent]
})
export class TodoPageModule {}

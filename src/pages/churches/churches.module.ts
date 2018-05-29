import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChurchesPage } from './churches';

@NgModule({
  declarations: [
    ChurchesPage,
  ],
  imports: [
    IonicPageModule.forChild(ChurchesPage),
  ],
})
export class ChurchesPageModule {}

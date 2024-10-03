import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { HomePage } from './pages/home/home.page';
import { PresentationRoutingModule } from './presentation-routing.module';
import { CardComponent } from './components/card/card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PresentationRoutingModule
  ],
  declarations: [HomePage, CardComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PresentationModule {}

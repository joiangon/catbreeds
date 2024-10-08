import { CUSTOM_ELEMENTS_SCHEMA, importProvidersFrom, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { HomePage } from './pages/home/home.page';
import { PresentationRoutingModule } from './presentation-routing.module';
import { CardComponent } from './components/card/card.component';
import { CatBreedsInteractor } from '../core/catbreeds.interactor';
import { CatBreedsRepository } from '../core';
import { provideHttpClient } from '@angular/common/http';
import { GetImagePipe } from './pipes/get-image.pipe';
import { SearchBarComponent } from './components/searchbar/search-bar-component.component';
import { BreedDetailPage } from './pages/breed-detail/breed-detail.page';

const INTERACTOR_PROVIDER = {
  provide: CatBreedsInteractor,
  deps: [CatBreedsRepository],
  useFactory: (repository: CatBreedsRepository) => new CatBreedsInteractor(repository),
}
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PresentationRoutingModule,
  ],
  declarations: [HomePage, BreedDetailPage, CardComponent, SearchBarComponent, GetImagePipe],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [INTERACTOR_PROVIDER],
})
export class PresentationModule {}

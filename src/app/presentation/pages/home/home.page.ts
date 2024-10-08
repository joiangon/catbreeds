import { Component, OnInit } from '@angular/core';
import { CatBreedsInteractor } from 'src/app/core/catbreeds.interactor';
import { GetBreedsEntity } from 'src/app/core';
import { HomeConfig } from './home.config';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public breeds: GetBreedsEntity[] = [];
  public filterText: string = '';
  public filteredBreeds: GetBreedsEntity[] = [];
  public config = HomeConfig;
  constructor(public readonly catBreedsInteractor: CatBreedsInteractor) {}

  public ngOnInit() {
    this.getBreeds();
  }

  public inputChange(event: { filterData: GetBreedsEntity[]; filterText: string }) {
    const { filterData, filterText } = event;

    this.filterText = filterText;
    this.filteredBreeds = this.breeds.filter((breed) =>
      filterData.some((filteredObject) => filteredObject.id === breed.id)
    );
  }

  public async getBreeds() {
    try {
      if (this.breeds.length === 0) {
        this.breeds = await this.catBreedsInteractor.getBreeds();
        this.filteredBreeds = this.breeds;
      }
    } catch (error) {
      console.error(error);
    }
  }
}

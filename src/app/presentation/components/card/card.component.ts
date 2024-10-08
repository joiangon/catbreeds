import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { GetBreedsEntity } from 'src/app/core';
import { CatBreedsInteractor } from 'src/app/core/catbreeds.interactor';
import { CardConfig } from './card.config';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() public breed!: GetBreedsEntity;
  @Input() public i18nMessage!: { buttonLabel: string; intelligence: string };

  public config = CardConfig;

  constructor(private navController: NavController){}

  public goTo() {
    this.navController.navigateForward([this.config.routes.breedDetail, this.breed.id], { state: this.breed });
  }
}

import { Component, Input } from '@angular/core';
import { GetBreedsEntity } from 'src/app/core';
import { CatBreedsInteractor } from 'src/app/core/catbreeds.interactor';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() public breed!: GetBreedsEntity;
  @Input() public i18nMessage!: { buttonLabel: string; inteligence: string };
}

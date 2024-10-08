import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { GetBreedsEntity } from 'src/app/core';
import { NavigationExtras, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { BreedDetailConfig } from './breed-detail.config';

@Component({
  selector: 'app-breed-detail',
  templateUrl: './breed-detail.page.html',
  styleUrls: ['./breed-detail.page.scss'],
})
export class BreedDetailPage implements OnInit{
  @Input() public breed!: GetBreedsEntity;

  public config = BreedDetailConfig;

  constructor(private router: Router, private navController: NavController) {}

  public ngOnInit(): void {
    this.breed = this.router.getCurrentNavigation()?.extras.state as GetBreedsEntity;
  }

  public goBack() {
    this.navController.back();
  }
}

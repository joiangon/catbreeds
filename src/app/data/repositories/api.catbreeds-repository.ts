import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { GetBreedsEntity } from 'src/app/core/entities/get-breeds.entity';
import { CatBreedsRepository } from 'src/app/core';

const URL = 'https://api.thecatapi.com/v1/';
const BREEDS_PATH = 'breeds';
const IMAGE_PATH = 'images';
@Injectable({
  providedIn: 'root',
})
export class ApiCatBreedsRepository extends CatBreedsRepository {
  constructor(private httpClient: HttpClient){
    super();
  }

  public getBreeds(): Promise<GetBreedsEntity[]> {
    return firstValueFrom(this.httpClient.get<GetBreedsEntity[]>(URL+BREEDS_PATH));
  }
}

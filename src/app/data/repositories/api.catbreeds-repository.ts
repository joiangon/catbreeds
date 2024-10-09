import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { GetBreedsEntity } from 'src/app/core/entities/get-breeds.entity';
import { CatBreedsRepository } from 'src/app/core';
import { environment } from 'src/environments/environment';

const URL = environment.API_BREEDS_URL;
const BREEDS_PATH = 'breeds';
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

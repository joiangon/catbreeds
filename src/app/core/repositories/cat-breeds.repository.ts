import { GetBreedsEntity } from '../entities/get-breeds.entity';

export abstract class CatBreedsRepository {
  abstract getBreeds(): Promise<GetBreedsEntity[]>;
}

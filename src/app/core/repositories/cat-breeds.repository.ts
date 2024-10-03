import { GetBreedsEntity } from '../entities/get-breeds.entity';

export abstract class CardBreedsRepository {
  abstract getBreeds(): Promise<GetBreedsEntity[]>;
}

import { GetBreedsEntity } from '../entities/get-breeds.entity';
import { CardBreedsRepository } from '../repositories/cat-breeds.repository';

export class GetBreedsUseCase {
  constructor(private repository: CardBreedsRepository){}

  public async getBreeds(): Promise<GetBreedsEntity[]> {
    return this.repository.getBreeds();
  }
}

import { GetBreedsEntity } from '../entities/get-breeds.entity';
import { CatBreedsRepository } from '../repositories/cat-breeds.repository';

export class GetBreedsUseCase {
  constructor(private repository: CatBreedsRepository){}

  public async getBreeds(): Promise<GetBreedsEntity[]> {
    return this.repository.getBreeds();
  }
}

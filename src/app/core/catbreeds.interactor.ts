import { CatBreedsRepository } from './repositories/cat-breeds.repository';
import { GetBreedsUseCase } from './use-cases/get-breeds.use-case';


export class CatBreedsInteractor {
  private readonly getBreedsUseCase: GetBreedsUseCase;

  constructor(repository: CatBreedsRepository) {
    this.getBreedsUseCase = new GetBreedsUseCase(repository);
  }

  public getBreeds() {
    return this.getBreedsUseCase.getBreeds();
  }
}

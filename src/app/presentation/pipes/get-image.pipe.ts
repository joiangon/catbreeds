import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

const IMAGE_URL = environment.BREED_IMAGE_URL;
const JPG_EXTENSION = '.jpg';
@Pipe({
  name: 'image',
})
export class GetImagePipe implements PipeTransform {
  transform(value: unknown): unknown {
    return IMAGE_URL + value + JPG_EXTENSION ;
  }
}

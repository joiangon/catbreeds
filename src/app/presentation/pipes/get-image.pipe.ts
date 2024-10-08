import { Pipe, PipeTransform } from '@angular/core';

const IMAGE_URL = 'https://cdn2.thecatapi.com/images/';
const JPG_EXTENSION = '.jpg';
@Pipe({
  name: 'image',
})
export class GetImagePipe implements PipeTransform {
  transform(value: unknown): unknown {
    return IMAGE_URL + value + JPG_EXTENSION ;
  }
}

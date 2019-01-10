import { Pipe, PipeTransform } from '@angular/core';
import _ from 'lodash';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {
  transform(value: string, args: any[]): string {
    return !_.isEmpty(value) ? value.charAt(0).toUpperCase() + value.slice(1) : '';
  }
}

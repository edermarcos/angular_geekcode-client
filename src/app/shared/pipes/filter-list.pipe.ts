import { Pipe, PipeTransform } from '@angular/core';
import _ from 'lodash';

import { EnumLookupInterface } from '../interfaces/enum-lookup.interface';

@Pipe({
  name: 'filterListById'
})
export class FilterListPipe implements PipeTransform {

  transform(data: EnumLookupInterface[], id: string): EnumLookupInterface[] {
    if (_.isEmpty(data) || data.length <= 0) {
      return [{ caption: '-- Select --', value: '-- select --' }];
    }
    const dataFiltered = _.isEmpty(id) ? data : data.filter(f => f.lookTypeName === id);
    dataFiltered.unshift({ caption: '-- Select --', value: '-- select --' });
    return dataFiltered;
  }
}

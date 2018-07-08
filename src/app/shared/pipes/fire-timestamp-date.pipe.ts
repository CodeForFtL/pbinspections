import { Pipe, PipeTransform } from '@angular/core';
import {firestore} from 'firebase/app';
import Timestamp = firestore.Timestamp;

@Pipe({
  name: 'fireTimestampDate'
})
export class FireTimestampDatePipe implements PipeTransform {

  transform(value: Timestamp, args?: any): any {
    return value ? new Date(value.seconds * 1000) : null;
  }

}

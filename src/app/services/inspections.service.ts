import {Injectable} from '@angular/core';
import {BaseService} from './base.service';
import {AngularFirestore} from 'angularfire2/firestore';
import {Inspection} from '../models/inspection';

@Injectable()
export class InspectionsService extends BaseService<Inspection> {

  constructor(afs: AngularFirestore) {
    super('inspections', afs);
  }
}

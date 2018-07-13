import {Injectable} from '@angular/core';
import {BaseService} from './base.service';
import {AngularFirestore, QueryFn} from 'angularfire2/firestore';
import {Inspection} from '../models/inspection';
import {Observable} from 'rxjs';
import {AuthService} from './auth.service';

@Injectable()
export class InspectionsService extends BaseService<Inspection> {

  constructor(afs: AngularFirestore, private authService: AuthService) {
    super('inspections', afs);
  }

  findAll(queryFn?: QueryFn): Observable<Inspection[]> {
    return this.authService.user
    // todo: add if not null
      .flatMap(user => {
        return user.roles.includes('admin')
          ? super.findAll(queryFn)
          : super.findAll(ref => (queryFn ? queryFn(ref) : ref)
            .where('ownerUid', '==', user.uid)) as Observable<Inspection[]>;
      });
  }
}

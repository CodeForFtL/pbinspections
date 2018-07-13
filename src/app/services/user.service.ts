import {Injectable} from '@angular/core';
import {BaseService} from './base.service';
import {User} from '../models/user';
import {AngularFirestore} from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService<User> {

  constructor(afs: AngularFirestore) {
    super('user', afs);
  }
}

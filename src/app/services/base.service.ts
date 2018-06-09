import {Observable} from 'rxjs';
import {AngularFirestore, AngularFirestoreCollection, DocumentReference} from 'angularfire2/firestore';

// @Injectable({
//   providedIn: 'root'
// })
export abstract class BaseService<T extends {id?: string}> {
  protected itemsCollection: AngularFirestoreCollection<T>;

  protected constructor(protected collectionName,
              protected afs: AngularFirestore) {
    this.itemsCollection = this.afs.collection(this.collectionName);
  }

  getOne(id): Observable<T> {
    return this.itemsCollection.doc<T>(`${id}`).valueChanges();
  }

  getAll(): Observable<T[]> {
    return this.itemsCollection.snapshotChanges().map(actions => actions.map(a => {
      const item = a.payload.doc.data();
      item.id = a.payload.doc.id;
      return item;
    }));
  }

  save(item: T): Promise<void | DocumentReference> {
    if (item.id) {
      return this.itemsCollection.doc(item.id).update(item);
    } else {
      return this.itemsCollection.add(item);
    }
  }

  delete(id: string) {
    return this.itemsCollection.doc(id).delete();
  }

}

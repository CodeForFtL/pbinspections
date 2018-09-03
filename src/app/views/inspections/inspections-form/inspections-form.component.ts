import {Component, OnDestroy, OnInit} from '@angular/core';
import {InspectionsService} from '../../../services/inspections.service';
import {Inspection} from '../../../models/inspection';
import {ActivatedRoute, Router} from '@angular/router';
import * as firebase from 'firebase/app';
import {flatMap} from 'rxjs/operators';
import {of, Subscription} from 'rxjs';

const Timestamp = firebase.firestore.Timestamp;

@Component({
  selector: 'app-inspections-form',
  templateUrl: './inspections-form.component.html',
  styleUrls: ['./inspections-form.component.scss']
})
export class InspectionsFormComponent implements OnInit, OnDestroy {

  inspection: Inspection;

  private _subscription: Subscription;

  constructor(private inspectionsService: InspectionsService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this._subscription = this.route.params.pipe(flatMap(params => {
      const id = params['id'];
      return id
        ? this.inspectionsService.findByUid(id)
        : of(<Inspection>{inspectionDate: new Timestamp(Math.floor(Date.now() / 1000), 0)});
    })).subscribe(inspection => this.inspection = inspection);
  }

  changeDate(event) {
    this.inspection.inspectionDate = event ? new Timestamp(Math.floor(event.getTime() / 1000), 0) : null;
  }

  async save() {
    await this.inspectionsService.save(this.inspection);
    await this.router.navigate(['']);
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }
}

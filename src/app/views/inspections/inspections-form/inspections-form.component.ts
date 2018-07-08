import {Component, OnInit} from '@angular/core';
import {InspectionsService} from '../../../services/inspections.service';
import {Inspection} from '../../../models/inspection';
import {ActivatedRoute, Router} from '@angular/router';
import * as firebase from 'firebase/app';
const Timestamp = firebase.firestore.Timestamp;

@Component({
  selector: 'app-inspections-form',
  templateUrl: './inspections-form.component.html',
  styleUrls: ['./inspections-form.component.scss']
})
export class InspectionsFormComponent implements OnInit {

  inspection: Inspection;

  constructor(private inspectionsService: InspectionsService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.inspectionsService.getOne(id).subscribe(inspection => {
          this.inspection = inspection;
          this.inspection.id = id;
        });
      } else {
        this.inspection = {inspectionDate: new Timestamp(Math.floor(Date.now() / 1000), 0)};
      }
    });
  }

  changeDate(event) {
    this.inspection.inspectionDate = event ? new Timestamp(Math.floor(event.getTime() / 1000), 0) : null;
  }

  async save() {
    await this.inspectionsService.save(this.inspection);
    await this.router.navigate(['']);
  }
}

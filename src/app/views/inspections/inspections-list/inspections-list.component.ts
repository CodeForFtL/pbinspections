import {Component, OnDestroy, OnInit} from '@angular/core';
import {InspectionsService} from '../../../services/inspections.service';
import {Inspection} from '../../../models/inspection';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-inspections-list',
  templateUrl: './inspections-list.component.html',
  styleUrls: ['./inspections-list.component.scss']
})
export class InspectionsListComponent {

  inspections: Observable<Inspection[]>;

  constructor(private inspectionsService: InspectionsService) {
    this.inspections = this.inspectionsService.findAll();
  }

  remove(id) {
    console.log('deleting: ', id);
    this.inspectionsService.delete(id);
  }

}

import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Inspection} from '../../../models/inspection';
import {InspectionsService} from '../../../services/inspections.service';

@Component({
  selector: 'app-inspections-map',
  templateUrl: './inspections-map.component.html',
  styleUrls: ['./inspections-map.component.scss']
})
export class InspectionsMapComponent implements OnInit {

  inspections: Observable<Inspection[]>;

  coordinates: Coordinates;

  constructor(private inspectionsService: InspectionsService) {
    this.inspections = this.inspectionsService.findAll();
  }

  ngOnInit() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(position => this.coordinates = position.coords);
    }
  }

}

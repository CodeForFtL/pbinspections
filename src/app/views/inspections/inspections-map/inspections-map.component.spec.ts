import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InspectionsMapComponent } from './inspections-map.component';

describe('InspectionsMapComponent', () => {
  let component: InspectionsMapComponent;
  let fixture: ComponentFixture<InspectionsMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InspectionsMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InspectionsMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

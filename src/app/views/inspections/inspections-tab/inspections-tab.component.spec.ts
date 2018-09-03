import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InspectionsTabComponent } from './inspections-tab.component';

describe('InspectionsTabComponent', () => {
  let component: InspectionsTabComponent;
  let fixture: ComponentFixture<InspectionsTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InspectionsTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InspectionsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

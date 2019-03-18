import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfSensorsComponent } from './list-of-sensors.component';

describe('ListOfSensorsComponent', () => {
  let component: ListOfSensorsComponent;
  let fixture: ComponentFixture<ListOfSensorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfSensorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfSensorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

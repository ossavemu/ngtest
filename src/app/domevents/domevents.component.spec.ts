import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomeventsComponent } from './domevents.component';

describe('DomeventsComponent', () => {
  let component: DomeventsComponent;
  let fixture: ComponentFixture<DomeventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DomeventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DomeventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

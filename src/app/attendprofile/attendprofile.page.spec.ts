import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AttendprofilePage } from './attendprofile.page';

describe('AttendprofilePage', () => {
  let component: AttendprofilePage;
  let fixture: ComponentFixture<AttendprofilePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AttendprofilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegfingerprintPage } from './regfingerprint.page';

describe('RegfingerprintPage', () => {
  let component: RegfingerprintPage;
  let fixture: ComponentFixture<RegfingerprintPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RegfingerprintPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateclassPage } from './createclass.page';

describe('CreateclassPage', () => {
  let component: CreateclassPage;
  let fixture: ComponentFixture<CreateclassPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CreateclassPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

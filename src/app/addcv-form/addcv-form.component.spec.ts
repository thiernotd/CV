import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcvFormComponent } from './addcv-form.component';

describe('AddcvFormComponent', () => {
  let component: AddcvFormComponent;
  let fixture: ComponentFixture<AddcvFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddcvFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcvFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrugAddEditComponent } from './drug-add-edit.component';

describe('DrugAddEditComponent', () => {
  let component: DrugAddEditComponent;
  let fixture: ComponentFixture<DrugAddEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DrugAddEditComponent]
    });
    fixture = TestBed.createComponent(DrugAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

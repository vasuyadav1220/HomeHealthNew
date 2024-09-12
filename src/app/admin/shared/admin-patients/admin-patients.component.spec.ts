import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPatientsComponent } from './admin-patients.component';

describe('AdminPatientsComponent', () => {
  let component: AdminPatientsComponent;
  let fixture: ComponentFixture<AdminPatientsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminPatientsComponent]
    });
    fixture = TestBed.createComponent(AdminPatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

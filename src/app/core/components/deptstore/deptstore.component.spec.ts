import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeptstoreComponent } from './deptstore.component';

describe('DeptstoreComponent', () => {
  let component: DeptstoreComponent;
  let fixture: ComponentFixture<DeptstoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeptstoreComponent]
    });
    fixture = TestBed.createComponent(DeptstoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupHpComponent } from './signup-hp.component';

describe('SignupHpComponent', () => {
  let component: SignupHpComponent;
  let fixture: ComponentFixture<SignupHpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignupHpComponent]
    });
    fixture = TestBed.createComponent(SignupHpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

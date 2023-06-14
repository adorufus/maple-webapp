import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunPurpleComponent } from './run-purple.component';

describe('RunPurpleComponent', () => {
  let component: RunPurpleComponent;
  let fixture: ComponentFixture<RunPurpleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RunPurpleComponent]
    });
    fixture = TestBed.createComponent(RunPurpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

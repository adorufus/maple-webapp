import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunWanderComponent } from './run-wander.component';

describe('RunWanderComponent', () => {
  let component: RunWanderComponent;
  let fixture: ComponentFixture<RunWanderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RunWanderComponent]
    });
    fixture = TestBed.createComponent(RunWanderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

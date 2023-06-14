import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunTrickComponent } from './run-trick.component';

describe('RunTrickComponent', () => {
  let component: RunTrickComponent;
  let fixture: ComponentFixture<RunTrickComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RunTrickComponent]
    });
    fixture = TestBed.createComponent(RunTrickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

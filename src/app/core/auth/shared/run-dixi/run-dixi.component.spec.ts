import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunDixiComponent } from './run-dixi.component';

describe('RunDixiComponent', () => {
  let component: RunDixiComponent;
  let fixture: ComponentFixture<RunDixiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RunDixiComponent]
    });
    fixture = TestBed.createComponent(RunDixiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

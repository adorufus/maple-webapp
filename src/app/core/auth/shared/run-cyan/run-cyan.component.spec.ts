import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunCyanComponent } from './run-cyan.component';

describe('RunCyanComponent', () => {
  let component: RunCyanComponent;
  let fixture: ComponentFixture<RunCyanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RunCyanComponent]
    });
    fixture = TestBed.createComponent(RunCyanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

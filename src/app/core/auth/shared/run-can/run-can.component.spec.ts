import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunCanComponent } from './run-can.component';

describe('RunCanComponent', () => {
  let component: RunCanComponent;
  let fixture: ComponentFixture<RunCanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RunCanComponent]
    });
    fixture = TestBed.createComponent(RunCanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

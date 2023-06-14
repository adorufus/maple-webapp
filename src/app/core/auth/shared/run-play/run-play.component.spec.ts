import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunPlayComponent } from './run-play.component';

describe('RunPlayComponent', () => {
  let component: RunPlayComponent;
  let fixture: ComponentFixture<RunPlayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RunPlayComponent]
    });
    fixture = TestBed.createComponent(RunPlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

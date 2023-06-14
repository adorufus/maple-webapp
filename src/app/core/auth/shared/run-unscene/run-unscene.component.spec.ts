import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunUnsceneComponent } from './run-unscene.component';

describe('RunUnsceneComponent', () => {
  let component: RunUnsceneComponent;
  let fixture: ComponentFixture<RunUnsceneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RunUnsceneComponent]
    });
    fixture = TestBed.createComponent(RunUnsceneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

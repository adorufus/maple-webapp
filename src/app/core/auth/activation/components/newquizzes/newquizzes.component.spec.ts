import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewquizzesComponent } from './newquizzes.component';

describe('NewquizzesComponent', () => {
  let component: NewquizzesComponent;
  let fixture: ComponentFixture<NewquizzesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewquizzesComponent]
    });
    fixture = TestBed.createComponent(NewquizzesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

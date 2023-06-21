import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextWanderComponent } from './text-wander.component';

describe('TextWanderComponent', () => {
  let component: TextWanderComponent;
  let fixture: ComponentFixture<TextWanderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextWanderComponent]
    });
    fixture = TestBed.createComponent(TextWanderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

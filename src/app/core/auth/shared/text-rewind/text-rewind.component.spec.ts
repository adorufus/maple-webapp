import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextRewindComponent } from './text-rewind.component';

describe('TextRewindComponent', () => {
  let component: TextRewindComponent;
  let fixture: ComponentFixture<TextRewindComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextRewindComponent]
    });
    fixture = TestBed.createComponent(TextRewindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextTrickComponent } from './text-trick.component';

describe('TextTrickComponent', () => {
  let component: TextTrickComponent;
  let fixture: ComponentFixture<TextTrickComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextTrickComponent]
    });
    fixture = TestBed.createComponent(TextTrickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

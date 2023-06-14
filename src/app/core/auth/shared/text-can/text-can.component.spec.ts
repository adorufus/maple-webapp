import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextCanComponent } from './text-can.component';

describe('TextCanComponent', () => {
  let component: TextCanComponent;
  let fixture: ComponentFixture<TextCanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextCanComponent]
    });
    fixture = TestBed.createComponent(TextCanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

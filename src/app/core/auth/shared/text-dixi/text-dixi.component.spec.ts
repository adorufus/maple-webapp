import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextDixiComponent } from './text-dixi.component';

describe('TextDixiComponent', () => {
  let component: TextDixiComponent;
  let fixture: ComponentFixture<TextDixiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextDixiComponent]
    });
    fixture = TestBed.createComponent(TextDixiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

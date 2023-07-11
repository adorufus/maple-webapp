import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextAllComponent } from './text-all.component';

describe('TextAllComponent', () => {
  let component: TextAllComponent;
  let fixture: ComponentFixture<TextAllComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextAllComponent]
    });
    fixture = TestBed.createComponent(TextAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextPlayComponent } from './text-play.component';

describe('TextPlayComponent', () => {
  let component: TextPlayComponent;
  let fixture: ComponentFixture<TextPlayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextPlayComponent]
    });
    fixture = TestBed.createComponent(TextPlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

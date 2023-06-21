import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextUnsceneComponent } from './text-unscene.component';

describe('TextUnsceneComponent', () => {
  let component: TextUnsceneComponent;
  let fixture: ComponentFixture<TextUnsceneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextUnsceneComponent]
    });
    fixture = TestBed.createComponent(TextUnsceneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

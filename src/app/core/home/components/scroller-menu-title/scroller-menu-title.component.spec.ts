import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollerMenuTitleComponent } from './scroller-menu-title.component';

describe('ScrollerMenuTitleComponent', () => {
  let component: ScrollerMenuTitleComponent;
  let fixture: ComponentFixture<ScrollerMenuTitleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScrollerMenuTitleComponent]
    });
    fixture = TestBed.createComponent(ScrollerMenuTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegmentPageComponent } from './segment-page.component';

describe('SegmentPageComponent', () => {
  let component: SegmentPageComponent;
  let fixture: ComponentFixture<SegmentPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SegmentPageComponent]
    });
    fixture = TestBed.createComponent(SegmentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

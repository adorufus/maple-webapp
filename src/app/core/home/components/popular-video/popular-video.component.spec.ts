import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularVideoComponent } from './popular-video.component';

describe('PopularVideoComponent', () => {
  let component: PopularVideoComponent;
  let fixture: ComponentFixture<PopularVideoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopularVideoComponent]
    });
    fixture = TestBed.createComponent(PopularVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

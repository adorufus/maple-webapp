import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerVideosComponent } from './banner-videos.component';

describe('BannerVideosComponent', () => {
  let component: BannerVideosComponent;
  let fixture: ComponentFixture<BannerVideosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BannerVideosComponent]
    });
    fixture = TestBed.createComponent(BannerVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

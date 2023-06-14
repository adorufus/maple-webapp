import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerPlayComponent } from './banner-play.component';

describe('BannerPlayComponent', () => {
  let component: BannerPlayComponent;
  let fixture: ComponentFixture<BannerPlayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BannerPlayComponent]
    });
    fixture = TestBed.createComponent(BannerPlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

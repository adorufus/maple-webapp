import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeVideosComponent } from './see-videos.component';

describe('SeeVideosComponent', () => {
  let component: SeeVideosComponent;
  let fixture: ComponentFixture<SeeVideosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeeVideosComponent]
    });
    fixture = TestBed.createComponent(SeeVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

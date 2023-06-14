import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaftarVideoComponent } from './daftar-video.component';

describe('DaftarVideoComponent', () => {
  let component: DaftarVideoComponent;
  let fixture: ComponentFixture<DaftarVideoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DaftarVideoComponent]
    });
    fixture = TestBed.createComponent(DaftarVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

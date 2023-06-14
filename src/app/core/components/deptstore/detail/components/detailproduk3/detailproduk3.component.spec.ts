import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Detailproduk3Component } from './detailproduk3.component';

describe('Detailproduk3Component', () => {
  let component: Detailproduk3Component;
  let fixture: ComponentFixture<Detailproduk3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Detailproduk3Component]
    });
    fixture = TestBed.createComponent(Detailproduk3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

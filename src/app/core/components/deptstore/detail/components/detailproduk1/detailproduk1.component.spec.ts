import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Detailproduk1Component } from './detailproduk1.component';

describe('Detailproduk1Component', () => {
  let component: Detailproduk1Component;
  let fixture: ComponentFixture<Detailproduk1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Detailproduk1Component]
    });
    fixture = TestBed.createComponent(Detailproduk1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

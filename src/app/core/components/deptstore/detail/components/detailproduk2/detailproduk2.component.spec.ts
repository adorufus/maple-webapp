import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Detailproduk2Component } from './detailproduk2.component';

describe('Detailproduk2Component', () => {
  let component: Detailproduk2Component;
  let fixture: ComponentFixture<Detailproduk2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Detailproduk2Component]
    });
    fixture = TestBed.createComponent(Detailproduk2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

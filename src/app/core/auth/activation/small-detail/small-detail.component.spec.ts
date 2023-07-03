import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallDetailComponent } from './small-detail.component';

describe('SmallDetailComponent', () => {
  let component: SmallDetailComponent;
  let fixture: ComponentFixture<SmallDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SmallDetailComponent]
    });
    fixture = TestBed.createComponent(SmallDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

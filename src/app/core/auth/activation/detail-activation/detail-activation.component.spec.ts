import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailActivationComponent } from './detail-activation.component';

describe('DetailActivationComponent', () => {
  let component: DetailActivationComponent;
  let fixture: ComponentFixture<DetailActivationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailActivationComponent]
    });
    fixture = TestBed.createComponent(DetailActivationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

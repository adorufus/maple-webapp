import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallArticlesComponent } from './small-articles.component';

describe('SmallArticlesComponent', () => {
  let component: SmallArticlesComponent;
  let fixture: ComponentFixture<SmallArticlesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SmallArticlesComponent]
    });
    fixture = TestBed.createComponent(SmallArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

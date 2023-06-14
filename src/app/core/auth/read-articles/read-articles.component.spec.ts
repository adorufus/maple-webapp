import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadArticlesComponent } from './read-articles.component';

describe('ReadArticlesComponent', () => {
  let component: ReadArticlesComponent;
  let fixture: ComponentFixture<ReadArticlesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReadArticlesComponent]
    });
    fixture = TestBed.createComponent(ReadArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

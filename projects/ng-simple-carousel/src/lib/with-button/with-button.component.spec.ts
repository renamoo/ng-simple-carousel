import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSimpleCarouselWithButtonComponent } from './ng-simple-carousel-with-button.component';

describe('NgSimpleCarouselWithButtonComponent', () => {
  let component: NgSimpleCarouselWithButtonComponent;
  let fixture: ComponentFixture<NgSimpleCarouselWithButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgSimpleCarouselWithButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSimpleCarouselWithButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

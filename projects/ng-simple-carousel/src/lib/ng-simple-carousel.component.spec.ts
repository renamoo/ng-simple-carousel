import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSimpleCarouselComponent } from './ng-simple-carousel.component';

describe('NgSimpleCarouselComponent', () => {
  let component: NgSimpleCarouselComponent;
  let fixture: ComponentFixture<NgSimpleCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgSimpleCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSimpleCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

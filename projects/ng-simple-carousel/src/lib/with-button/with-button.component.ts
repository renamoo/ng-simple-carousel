import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CarouselImage } from './../carousel.component';
import { CarouselController } from './../carousel.controller';

@Component({
  selector: 'ng-simple-carousel-with-button',
  templateUrl: './with-button.component.html',
  styleUrls: ['./with-button.component.scss']
})
export class NgSimpleCarouselWithButtonComponent implements OnInit {
  @Input() controller: CarouselController;
  @Input() images: CarouselImage[];
  // @Input() objectFit: 'contain' | 'cover' = 'cover';
  // @Input() infinite = false;
  @Output() imgChange: EventEmitter<string> = new EventEmitter();
  isFirstImg = true;
  isLastImg = false;

  constructor() { }

  ngOnInit(): void {
  }

  onPrev() {
    this.controller.prev();
  }

  onNext() {
    this.controller.next();
  }

  onImgChange(id: string) {
    if (id === this.images[0].id) {
      this.isFirstImg = true;
      this.isLastImg = false;
    } else if (id === this.images[this.images.length - 1].id) {
      this.isFirstImg = false;
      this.isLastImg = true;
    } else {
      this.isFirstImg = false;
      this.isLastImg = false;
    }
    this.imgChange.emit(id);
  }
}

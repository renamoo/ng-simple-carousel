import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { CarouselController } from './carousel.controller';

export interface CarouselImage {
  id: string;
  src: string;
}

@Component({
  selector: 'ng-simple-carousel',
  templateUrl: './carousel.html',
  styleUrls: ['./carousel.scss']
})
export class NgSimpleCarouselComponent implements OnInit {
  @ViewChild('container') containerEl: ElementRef;
  @Input() controller: CarouselController;
  @Input() images: CarouselImage[];
  // @Input() objectFit: 'contain' | 'cover' = 'cover';
  // @Input() infinite = false;
  @Output() imgChange: EventEmitter<string> = new EventEmitter();
  activeIndex = 0;
  constructor() { }

  ngOnInit(): void {
    this.controller.jump$.pipe().subscribe(id => this.jumpTo(id));
    this.controller.action$.pipe().subscribe(action => action === 'prev' ? this.onPrev() : this.onNext());
  }

  ngAfterViewInit() {
    const rootEl = this.containerEl.nativeElement as HTMLElement;
    const options = {
      root: rootEl,
      rootMargin: '0px -50%',
    };
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const activeId = entry.target.id;
          const newInd = this.images.findIndex(img => img.id === activeId)
          this.onImgChange(activeId, newInd);
        }
      });
    }, options);
    Array.from(rootEl.children).forEach(img => observer.observe(img));
  }

  jumpTo(id: string) {
    const newInd = this.images.findIndex(img => img.id === id);
    const rootEl = this.containerEl.nativeElement as HTMLElement;
    rootEl.scrollTo({
      top: 0,
      left: rootEl.offsetWidth * newInd,
      behavior: 'smooth'
    });
    this.onImgChange(id, newInd);
  }

  onPrev() {
    let newId;
    if (this.activeIndex - 1 >= 0) { newId = this.images[this.activeIndex - 1].id; }
    // if (this.infinite && this.activeIndex - 1 < 0) { newId = this.images[this.images.length - 1].id; }
    if (newId) { this.jumpTo(newId); }
  }

  onNext() {
    let newId;
    if (this.activeIndex + 1 < this.images.length) { newId = this.images[this.activeIndex + 1].id; }
    // if (this.infinite && this.activeIndex + 1 > this.images.length - 1) { newId = this.images[0].id; }
    if (newId) { this.jumpTo(newId); }
  }

  onImgChange(id: string, index: number) {
    this.activeIndex = index;
    this.imgChange.emit(id)
  }

}

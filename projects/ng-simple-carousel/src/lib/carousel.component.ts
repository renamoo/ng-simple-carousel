/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
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
export class NgSimpleCarouselComponent implements OnInit, OnDestroy {
  @ViewChild('container') containerEl: ElementRef;
  @Input() controller: CarouselController;
  @Input() images: CarouselImage[];
  // @Input() objectFit: 'contain' | 'cover' = 'cover';
  // @Input() infinite = false;
  @Output() imgChange: EventEmitter<string> = new EventEmitter();
  activeIndex = 0;
  observer: IntersectionObserver;
  scroll$ = new BehaviorSubject(false);
  destroy$ = new Subject<void>();
  test = 0;

  constructor() { }

  ngOnInit(): void {
    this.controller.jump$.pipe(takeUntil(this.destroy$)).subscribe(id => this.jumpTo(id));
    this.controller.action$.pipe(takeUntil(this.destroy$)).subscribe(action => action === 'prev' ? this.onPrev() : this.onNext());
  }

  ngAfterViewInit() {
    this.initObserve();
    this.startObserve();
  }

  initObserve() {
    const rootEl = this.containerEl.nativeElement as HTMLElement;
    const options = {
      root: rootEl,
      rootMargin: '0px -50%',
    };
    this.observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && this.test !== 1) {
          const activeId = entry.target.id;
          const newInd = this.images.findIndex(img => img.id === activeId)
          this.onImgChange(activeId, newInd);
        }
      });
    }, options);
  }

  startObserve() {
    const rootEl = this.containerEl.nativeElement as HTMLElement;
    Array.from(rootEl.children).forEach(img => this.observer.observe(img));
  }

  stopObserve() {
    this.observer.disconnect();
  }

  // Observer will call onImgChange()
  jumpTo(id: string) {
    const newInd = this.images.findIndex(img => img.id === id);
    if (this.activeIndex === newInd) { return; }
    const rootEl = this.containerEl.nativeElement as HTMLElement;
    this.test = 1;
    rootEl.scrollTo({
      top: 0,
      left: rootEl.offsetWidth * newInd,
      behavior: 'smooth'
    });
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
    if (this.activeIndex === index) { return; }
    this.activeIndex = index;
    this.imgChange.emit(id);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    this.stopObserve();
  }

}

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

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
  selector: 'ng-simple-carousel-with-dots',
  templateUrl: './with-dots.component.html',
  styleUrls: ['./with-dots.component.scss']
})
export class NgSimpleCarouselWithDotsComponent implements OnInit {
  @Input() controller: CarouselController;
  @Input() images: CarouselImage[];
  @Input() objectFit: 'contain' | 'cover';
  // @Input() infinite = false;
  @Output() imgChange: EventEmitter<string> = new EventEmitter();
  activeId;

  constructor() { }

  ngOnInit(): void {
    this.activeId = this.images[0].id;
  }

  onImgChange(id: string) {
    this.activeId = id;
    this.imgChange.emit(id);
  }

  onDotsClick(id: string) {
    this.controller.jumpTo(id);
  }
}

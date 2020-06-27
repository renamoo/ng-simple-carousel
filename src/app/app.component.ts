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

import { Component } from '@angular/core';
import { CarouselImage } from './../../projects/ng-simple-carousel/src/lib/carousel.component';
import { CarouselController } from './../../projects/ng-simple-carousel/src/lib/carousel.controller';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-simple-carousel-app';
  images: CarouselImage[] = [
    { id: 'two', src: 'https://storage.cloud.google.com/comeart-artists/ugetsu/black%20whirls.jpg' },
    { id: 'one', src: 'https://storage.cloud.google.com/comeart-artists/ugetsu/black%20lion.jpg' },
    { id: 'three', src: 'https://storage.cloud.google.com/comeart-artists/ugetsu/%E9%AC%BC%E7%81%AB.jpg' }
  ];
  controller1 = new CarouselController();
  controller2 = new CarouselController();
}

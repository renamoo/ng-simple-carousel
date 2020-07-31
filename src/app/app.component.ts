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
  isMobile = window.parent.screen.width < 896;
  images: CarouselImage[] = [
    { id: 'australian', src: 'assets/australian.jpg' },
    { id: 'dachshund', src: 'assets/dachshund.jpg' },
    { id: 'shiba', src: 'assets/shiba.jpg' }
  ];
  imagesWithDirection: CarouselImage[] = [
    {
      id: 'australian', src: 'assets/australian.jpg',
      sources: [
        { srcset: 'assets/australian.webp', type: 'image/webp' },
      ]
    },
    { id: 'dachshund', src: 'assets/dachshund.jpg' },
    { id: 'shiba', src: 'assets/shiba.jpg' }
  ];
  controllerTop = new CarouselController();
  controllerButton = new CarouselController();
  controllerDots = new CarouselController();
  controllerDirection = new CarouselController();
  controllerAuto = new CarouselController();
  usages = USAGES;
  apis = APIS;

  onImgChange(id: string) {
    console.log(id);
  }
}

const USAGES = [
  {
    id: 'button',
    title: 'Buttons on sides',
    html: `<div class="wrap_carousel">
    <ng-simple-carousel-with-button [images]="images" [controller]="controllerButton" (imgChange)="onImgChange($event)">
    </ng-simple-carousel-with-button>
</div>`,
    css: `.wrap_carousel {
      margin:auto;
      // image aspect ratio is 3 : 2
      width:80%;
      height: calc((50vw - 40px) * 0.8 / 3 * 2);
    }`,
    ts: `export class SampleComponent {
    controllerButton = new CarouselController();

    images: CarouselImage[] = [
      { id: 'australian', src: 'assets/australian.jpg' },
      { id: 'dachshund', src: 'assets/dachshund.jpg' },
      { id: 'shiba', src: 'assets/shiba.jpg' }
    ];

    onImgChange(id: string) {
      console.log(id);
    }
}
    `
  },
  {
    id: 'dots',
    title: 'Dots on bottom',
    html: `<div class="wrap_carousel">
    <ng-simple-carousel-with-dots [images]="images" [controller]="controllerDots" (imgChange)="onImgChange($event)">
    </ng-simple-carousel-with-dots>
</div>`,
    css: `.wrap_carousel {
      margin:auto;
      // image aspect ratio is 3 : 2
      width:80%;
      height: calc((50vw - 40px) * 0.8 / 3 * 2);
    }`,
    ts: `export class SampleComponent {
    controllerDots = new CarouselController();

    images: CarouselImage[] = [
      { id: 'australian', src: 'assets/australian.jpg' },
      { id: 'dachshund', src: 'assets/dachshund.jpg' },
      { id: 'shiba', src: 'assets/shiba.jpg' }
    ];

    onImgChange(id: string) {
      console.log(id);
    }
}
    `
  },
  {
    id: 'artDirection',
    title: 'Art Direction (Image Optimization)',
    html: `<div class="wrap_carousel">
    <ng-simple-carousel-with-dots [images]="images" [controller]="controller" (imgChange)="onImgChange($event)">
    </ng-simple-carousel-with-dots>
</div>`,
    css: `.wrap_carousel {
      margin:auto;
      // image aspect ratio is 3 : 2
      width:80%;
      height: calc((50vw - 40px) * 0.8 / 3 * 2);
    }`,
    ts: `export class SampleComponent {
    controller = new CarouselController();

    images: CarouselImage[] = [
      {
        id: 'australian', src: 'assets/australian.jpg',
        sources: [
          { srcset: 'assets/australian.webp', type: 'image/webp' },
        ]
      },
      { id: 'dachshund', src: 'assets/dachshund.jpg' },
      { id: 'shiba', src: 'assets/shiba.jpg' }
    ];

    onImgChange(id: string) {
      console.log(id);
    }
}
    `
  },
  {
    id: 'auto',
    title: 'Auto slides',
    isDev: true
  }
];

const APIS = [
  {
    name: 'NgSimpleCarouselComponent',
    type: 'component',
    selector: 'ng-simple-carousel',
    inputs: [
      {
        name: 'controller',
        type: 'CarouselController',
        link: '#carouselController',
        caption: 'Class used to change component state programatically'
      },
      {
        name: 'images',
        type: 'CarouselImage[]',
        link: '#carouselImage',
        caption: 'Information of images on the slides'
      },
      {
        name: 'objectFit',
        type: '"contain" | "cover"',
        caption: 'Set css object-fit property. Default is contain'
      }
    ],
    outputs: [
      {
        name: 'imgChange',
        type: 'EventEmitter<string>',
        caption: 'Id of image emitted when active image is changed'
      }
    ]
  },
  {
    name: 'NgSimpleCarouselWithButtonComponent',
    type: 'component',
    selector: 'ng-simple-carousel-with-button',
    inputs: [
      {
        name: 'controller',
        type: 'CarouselController',
        link: '#carouselController',
        caption: 'Class used to change component state programatically'
      },
      {
        name: 'images',
        type: 'CarouselImage[]',
        link: '#carouselImage',
        caption: 'Information of images on the slides'
      },
      {
        name: 'objectFit',
        type: '"contain" | "cover"',
        caption: 'Set css object-fit property. Default is contain'
      }
    ],
    outputs: [
      {
        name: 'imgChange',
        type: 'EventEmitter<string>',
        caption: 'Id of image emitted when active image is changed'
      }
    ]
  },
  {
    name: 'NgSimpleCarouselComponentWithDots',
    type: 'component',
    selector: 'ng-simple-carousel-with-dots',
    inputs: [
      {
        name: 'controller',
        type: 'CarouselController',
        link: '#carouselController',
        caption: 'Class used to change component state programatically'
      },
      {
        name: 'images',
        type: 'CarouselImage[]',
        link: '#carouselImage',
        caption: 'Information of images on the slides'
      },
      {
        name: 'objectFit',
        type: '"contain" | "cover"',
        caption: 'Set css object-fit property. Default is contain'
      }
    ],
    outputs: [
      {
        name: 'imgChange',
        type: 'EventEmitter<string>',
        caption: 'Id of image emitted when active image is changed'
      }
    ]
  },
  {
    name: 'CarouselController',
    type: 'class',
    id: 'carouselController',
    methods: [
      {
        name: 'jumpTo',
        arg: 'id<string>',
        caption: 'jump to the image of specified id'
      },
      {
        name: 'prev',
        arg: '---',
        caption: 'Go to previous image'
      },
      {
        name: 'next',
        arg: '---',
        caption: 'Go to next image'
      }
    ]
  },
  {
    name: 'CarouselImage',
    type: 'interface',
    id: 'carouselImage',
    props: [
      {
        name: 'id',
        type: 'string'
      },
      {
        name: 'src',
        type: 'string'
      }
    ]
  }
];

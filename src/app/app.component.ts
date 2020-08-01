import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { CarouselImage } from './../../projects/ng-simple-carousel/src/lib/carousel.component';
import { CarouselController } from './../../projects/ng-simple-carousel/src/lib/carousel.controller';
import { AppService } from './app.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
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
  md: string;

  constructor(private service: AppService) { }

  ngOnInit() {
    this.service.getReadme().pipe(first()).subscribe(txt => this.md = txt.split("## APIs")[1]);
  }

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

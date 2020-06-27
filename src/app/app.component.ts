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

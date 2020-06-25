import { Component, Input, OnInit } from '@angular/core';

export interface CarouselImage {
  id: string;
  src: string;
}

@Component({
  selector: 'ng-simple-carousel',
  templateUrl: './ng-simple-carousel.html',
  styleUrls: ['./ng-simple-carousel.scss']
})
export class NgSimpleCarouselComponent implements OnInit {
  @Input() images: CarouselImage[] = [
    { id: '1', src: 'https://storage.cloud.google.com/comeart-artists/ugetsu/black%20lion.jpg' },
    { id: '2', src: 'https://storage.cloud.google.com/comeart-artists/ugetsu/black%20whirls.jpg' },
    { id: '3', src: 'https://storage.cloud.google.com/comeart-artists/ugetsu/%E9%AC%BC%E7%81%AB.jpg' }
  ];
  activeIndex = 1;

  constructor() { }

  ngOnInit(): void {
  }

}

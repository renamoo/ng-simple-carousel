import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgSimpleCarouselComponent } from './carousel.component';
import { NgSimpleCarouselWithButtonComponent } from './with-button/with-button.component';

@NgModule({
  declarations: [NgSimpleCarouselComponent, NgSimpleCarouselWithButtonComponent],
  imports: [
    CommonModule
  ],
  exports: [NgSimpleCarouselComponent, NgSimpleCarouselWithButtonComponent]
})
export class NgSimpleCarouselModule { }

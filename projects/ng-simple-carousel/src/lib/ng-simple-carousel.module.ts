import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgSimpleCarouselComponent } from './ng-simple-carousel.component';



@NgModule({
  declarations: [NgSimpleCarouselComponent],
  imports: [
    CommonModule
  ],
  exports: [NgSimpleCarouselComponent]
})
export class NgSimpleCarouselModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgSimpleCarouselModule } from './../../projects/ng-simple-carousel/src/lib/ng-simple-carousel.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgSimpleCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { HttpClientModule } from '@angular/common/http';
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
import { NgModule } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgSimpleCarouselModule } from './../../projects/ng-simple-carousel/src/lib/carousel.module';
import { AppComponent } from './app.component';
import { CodeSwitchComponent } from './code-switch/code-switch.component';
import { MdPipe } from './md.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CodeSwitchComponent,
    MdPipe
  ],
  imports: [
    BrowserModule,
    NgSimpleCarouselModule,
    BrowserAnimationsModule,
    MatButtonToggleModule,
    MatSidenavModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

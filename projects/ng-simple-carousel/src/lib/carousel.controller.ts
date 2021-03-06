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

import { Subject } from "rxjs";

export class CarouselController {
  private jumpSub: Subject<string> = new Subject<string>();
  jump$ = this.jumpSub.asObservable();
  private actionSub: Subject<'prev' | 'next'> = new Subject<'prev' | 'next'>();
  action$ = this.actionSub.asObservable();

  constructor() {
  }

  jumpTo(id: string) {
    this.jumpSub.next(id);
  }

  prev() {
    this.actionSub.next('prev');
  }

  next() {
    this.actionSub.next('next');
  }

}

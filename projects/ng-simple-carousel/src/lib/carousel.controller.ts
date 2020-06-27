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

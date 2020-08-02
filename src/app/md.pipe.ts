import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import * as marked from 'marked';

@Pipe({
  name: 'md'
})
export class MdPipe implements PipeTransform {

  constructor(private sanitized: DomSanitizer) { }

  transform(value: string): unknown {
    if (!value) { return; }
    return this.sanitized.bypassSecurityTrustHtml(this.parseMd(value));
  }

  parseMd(md: string) {
    return marked(md, { headerIds: true });
  }

}

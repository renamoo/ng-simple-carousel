import { Pipe, PipeTransform } from '@angular/core';
import * as marked from 'marked';

@Pipe({
  name: 'md'
})
export class MdPipe implements PipeTransform {

  transform(value: string): unknown {
    if (!value) { return; }
    return this.parseMd(value);
  }

  parseMd(md: string) {
    return marked(md, { headerIds: true, headerPrefix: 'api_' });
  }

}

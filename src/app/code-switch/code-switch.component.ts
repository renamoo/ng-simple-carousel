import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-code-switch',
  templateUrl: './code-switch.component.html',
  styleUrls: ['./code-switch.component.scss']
})
export class CodeSwitchComponent implements OnInit {
  @Input() htmlStr: string;
  @Input() tsStr: string;
  @Input() cssStr: string;
  modes = ['html', 'css', 'ts'];
  active = 'html';

  constructor() { }

  ngOnInit(): void {
  }

  onClick(id: string) {
    this.active = id;
  }

}

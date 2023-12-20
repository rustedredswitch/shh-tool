import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import { Terminal } from 'xterm';

@Component({
  selector: 'app-ssh-space',
  templateUrl: './ssh-space.component.html',
  styleUrls: ['./ssh-space.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class SshSpaceComponent implements AfterViewInit {
  public term!: Terminal;
  @ViewChild('terminal') terminalDiv!: ElementRef;

  constructor() {}

  ngAfterViewInit() {
    this.term = new Terminal({
      cursorBlink: true, // 光标闪烁
      scrollback: 1000, // 终端中滚动保留的行数
      tabStopWidth: 8, //
    });
    this.term.open(this.terminalDiv.nativeElement);
    let i = 0;
    while(i < 100){
      this.term.writeln('Welcome to xterm.js');
      this.term.writeln('Prova');
      this.term.writeln('Prova');
      i++;
    }
  }
}

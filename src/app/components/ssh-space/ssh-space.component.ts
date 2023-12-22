import {AfterViewInit, Component, ElementRef, ViewChild, ViewEncapsulation} from '@angular/core';
import {Terminal} from 'xterm';
import {FitAddon} from 'xterm-addon-fit';

@Component({
  selector: 'app-ssh-space',
  templateUrl: './ssh-space.component.html',
  styleUrls: ['./ssh-space.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class SshSpaceComponent implements AfterViewInit {
  public term!: Terminal;
  @ViewChild('terminal') terminalDiv!: ElementRef;

  constructor() {
  }

  ngAfterViewInit() {
    this.term = new Terminal({
      cursorBlink: true,
    });

    const fitAddon = new FitAddon();
    this.term.loadAddon(fitAddon);

    this.term.open(this.terminalDiv.nativeElement);
    fitAddon.fit();


    let i = 0;
    while (i < 100) {
      this.term.writeln('Welcome to xterm.js');
      this.term.writeln('Prova');
      this.term.writeln('Prova');
      i++;
    }
  }
}

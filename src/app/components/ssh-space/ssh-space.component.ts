import {AfterViewInit, Component, ViewChild,} from '@angular/core';
import {Subject} from 'rxjs';
import {FunctionsUsingCSI, KindOfCharacterAttributes, NgTerminal} from 'ng-terminal';
import {Terminal} from 'xterm';
import {WebLinksAddon} from 'xterm-addon-web-links';

@Component({
  selector: 'app-ssh-space',
  templateUrl: './ssh-space.component.html',
  styleUrls: ['./ssh-space.component.css'],
})
export class SshSpaceComponent implements AfterViewInit {
  readonly title = 'NgTerminal Live Example';
  readonly color = 'accent';
  readonly prompt = '\n' + FunctionsUsingCSI.cursorColumn(1) + '$ ';


  underlying?: Terminal;
  writeSubject = new Subject<string>();
  keyInput: string = '';

  @ViewChild('term', {static: false}) child?: NgTerminal;

  ngAfterViewInit() {
    if (!this.child) return;
    this.underlying = this.child.underlying!!;
    this.underlying.options.fontSize = 20;
    this.underlying.loadAddon(new WebLinksAddon());
    this.child.setXtermOptions({
      fontFamily: '"Cascadia Code", Menlo, monospace',
      theme: this.baseTheme,
      cursorBlink: true,
    });
    this.child.write(
      '$ NgTerminal Live Example\n' + FunctionsUsingCSI.cursorColumn(1)
    );
    this.child.write(
      FunctionsUsingCSI.characterAttributes(
        KindOfCharacterAttributes.SetforegroundcolortoRed,
        KindOfCharacterAttributes.Bold
      )
    );
    this.child.write(
      `$ 1) Try the data binding in the input below.\n` +
      FunctionsUsingCSI.cursorColumn(1)
    );
    this.child.write(FunctionsUsingCSI.characterAttributes(KindOfCharacterAttributes.Normal));
    this.child.write(
      `$ 2) Try dragging on the ${FunctionsUsingCSI.characterAttributes(KindOfCharacterAttributes.SetbackgroundcolortoGreen)}borders` +
      `${FunctionsUsingCSI.characterAttributes(KindOfCharacterAttributes.Normal)} and set ` +
      `${FunctionsUsingCSI.characterAttributes(KindOfCharacterAttributes.SetbackgroundcolortoCyan)}row and ` +
      `col${FunctionsUsingCSI.characterAttributes(KindOfCharacterAttributes.Normal)}` +
      `.\n` +
      FunctionsUsingCSI.cursorColumn(1)
    );
    this.child.write(
      FunctionsUsingCSI.characterAttributes(KindOfCharacterAttributes.Bold)
    );
    this.child.write(`$ `);
    this.child.onData().subscribe((input) => {
      if (!this.child) return;
      if (input === '\r') {
        // Carriage Return (When Enter is pressed)
        this.child.write(this.prompt);
      } else if (input === '\u007f') {
        // Delete (When Backspace is pressed)
        if (this.child.underlying!!.buffer.active.cursorX > 2)
          this.child.write('\b \b');
      } else if (input === '\u0003') {
        // End of Text (When Ctrl and C are pressed)
        this.child.write('^C');
        this.child.write(this.prompt);
      } else this.child.write(input);
    });

    this.child.onKey().subscribe((e) => {
      //onData() is commonly used.
    });
  }

  onKeyInput(event: string) {
    this.keyInput = event;
  }

  baseTheme = {
    foreground: 'royalblue',
    background: 'black',
    selectionBackground: '#5DA5D533',
    border: '#85858a',
  };
}

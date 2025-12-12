import {Component, inject} from '@angular/core';
import {WorkbenchView} from '@scion/workbench';

@Component({
  selector: 'app-terminal',
  imports: [],
  templateUrl: './terminal.html',
  styleUrl: './terminal.scss',
})
export default class Terminal {

  constructor() {
    inject(WorkbenchView).title = 'Terminal';
  }
}

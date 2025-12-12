import {Component, inject} from '@angular/core';
import {WorkbenchDialog, WorkbenchDialogActionDirective} from '@scion/workbench';

@Component({
  selector: 'app-dialog',
  imports: [
    WorkbenchDialogActionDirective,
  ],
  templateUrl: './dialog.html',
  styleUrl: './dialog.scss',
})
export class Dialog {

  protected dialog = inject(WorkbenchDialog);

}

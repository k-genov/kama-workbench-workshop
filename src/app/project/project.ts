import {Component, effect, inject, input} from '@angular/core';
import {WorkbenchDialogService, WorkbenchView} from '@scion/workbench';
import {Dialog} from '../dialog/dialog';

@Component({
  selector: 'app-project',
  imports: [],
  templateUrl: './project.html',
  styleUrl: './project.scss',
})
export default class Project {

  public id = input.required<number>();
  private dialogService = inject(WorkbenchDialogService);

  constructor() {
    const view = inject(WorkbenchView);
    effect(() => {
      view.title = `Project ${this.id()}`;
    });
  }

  protected onOpenDialog(): void {
    this.dialogService.open(Dialog);
  }

}

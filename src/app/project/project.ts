import {Component, effect, inject, input} from '@angular/core';
import {WorkbenchView} from '@scion/workbench';

@Component({
  selector: 'app-project',
  imports: [],
  templateUrl: './project.html',
  styleUrl: './project.scss',
})
export default class Project {

  public id = input.required<number>();

  constructor() {
    const view = inject(WorkbenchView);
    effect(() => {
      view.title = `Project ${this.id()}`;
    });
  }

}

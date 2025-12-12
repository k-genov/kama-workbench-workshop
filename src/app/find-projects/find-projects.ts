import {Component, inject} from '@angular/core';
import {WorkbenchView} from '@scion/workbench';

@Component({
  selector: 'app-find-projects',
  imports: [],
  templateUrl: './find-projects.html',
  styleUrl: './find-projects.scss',
})
export default class FindProjects {

  constructor() {
    inject(WorkbenchView).title = `Occurrences of 'Project'`;
  }

}

import {Component, inject} from '@angular/core';
import {WorkbenchPartActionDirective, WorkbenchRouter} from '@scion/workbench';

@Component({
  selector: 'app-projects',
  imports: [
    WorkbenchPartActionDirective,
  ],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export default class Projects {

  private router = inject(WorkbenchRouter);

  protected onOpenProject(projectId: string): void {
    void this.router.navigate([`projects/${projectId}`]);
  }

  protected onFindProject(): void {
    void this.router.navigate(['find/project'], {partId: 'find', target: 'blank'});
  }

}

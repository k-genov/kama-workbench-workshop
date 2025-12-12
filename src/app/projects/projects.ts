import {Component, inject} from '@angular/core';
import {WorkbenchRouter} from '@scion/workbench';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export default class Projects {

  private router = inject(WorkbenchRouter);

  protected onOpenProject(projectId: string): void {
    void this.router.navigate([`projects/${projectId}`]);
  }

}

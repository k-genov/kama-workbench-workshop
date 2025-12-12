import {Component, inject} from '@angular/core';
import {WorkbenchComponent, WorkbenchPart, WorkbenchPartActionDirective, WorkbenchRouter, WorkbenchService} from '@scion/workbench';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [WorkbenchComponent, FormsModule, WorkbenchPartActionDirective],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {

  protected workbenchService = inject(WorkbenchService);
  private router = inject(WorkbenchRouter);

  protected onTerminalOpen(): void {
    void this.router.navigate(['terminal'], {partId: 'terminal', target: 'blank'})
  }

  protected canMatchTerminal = (part: WorkbenchPart): boolean => {
    return part.alternativeId === 'terminal';
  };

}

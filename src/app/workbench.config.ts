import {MAIN_AREA, WorkbenchConfig} from '@scion/workbench';

export const workbenchConfig: WorkbenchConfig = {

  layout: factory =>
    factory.addPart(MAIN_AREA)
      .addPart('projects', {relativeTo: MAIN_AREA, align: 'left', ratio: .25})
      .addPart('notifications', {relativeTo: MAIN_AREA, align: 'right', ratio: .25})
      .navigatePart(MAIN_AREA, ['desktop'])
      .navigatePart('projects', ['projects'])
      .navigatePart('notifications', ['notifications'])

};
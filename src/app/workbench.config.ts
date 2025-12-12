import {MAIN_AREA, WorkbenchConfig} from '@scion/workbench';

export const workbenchConfig: WorkbenchConfig = {

  layout: factory =>
    factory.addPart(MAIN_AREA)
      .navigatePart(MAIN_AREA, ['desktop']),

};
import {MAIN_AREA, WorkbenchConfig} from '@scion/workbench';

export const workbenchConfig: WorkbenchConfig = {

  layout: {
    perspectives: [
      {
        id: 'main',
        layout: factory =>
          factory.addPart(MAIN_AREA)
            .addPart('projects', {dockTo: 'left-top'}, {label: 'Projects', icon: 'folder'})
            .addPart('notifications', {dockTo: 'right-top'}, {label: 'Notifications', icon: 'notifications'})
            .addPart('repositories', {dockTo: 'left-bottom'}, {label: 'Repositories', icon: 'cloud'})
            .addPart('dependencies', {dockTo: 'right-top'}, {label: 'Dependencies', icon: 'family_history'})
            .addPart('issues', {dockTo: 'right-top'}, {label: 'Issues', icon: 'breaking_news'})
            .addPart('commits', {dockTo: 'right-bottom'}, {label: 'Commits', icon: 'commit'})
            .addPart('find', {dockTo: 'bottom-left'}, {label: 'Find', icon: 'search'})
            .addPart('terminal', {dockTo: 'bottom-left'}, {label: 'Terminal', icon: 'terminal'})
            .addPart('problems', {dockTo: 'bottom-right'}, {label: 'Problems', icon: 'error'})
            .addPart('progress', {dockTo: 'bottom-right'}, {label: 'Progress', icon: 'history'})
            .navigatePart(MAIN_AREA, ['desktop'])
            .navigatePart('projects', ['projects'])
            .navigatePart('notifications', ['notifications']),
      },

      {
        id: 'another-perspective',
        layout: factory =>
          factory.addPart(MAIN_AREA)
            .addPart('tasks', {dockTo: 'right-top'}, {label: 'Notifications', icon: 'checklist'})
            .navigatePart(MAIN_AREA, ['desktop'])
            .activatePart('tasks'),
      },
    ],
  },

};
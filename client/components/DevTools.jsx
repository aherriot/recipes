import React from 'react';

import { createDevTools } from 'redux-devtools';
import DockMonitor from 'redux-devtools-dock-monitor';
import {ImportExportMonitor} from 'redux-import-export-monitor';
import Inspector from 'redux-devtools-inspector';

export default createDevTools(
  <DockMonitor
    toggleVisibilityKey='ctrl-h'
    changePositionKey='ctrl-q'
    changeMonitorKey='ctrl-m'
    fluid={false}
    defaultSize={400}
    defaultIsVisible={false}>

    <Inspector />
    <ImportExportMonitor />

  </DockMonitor>
);

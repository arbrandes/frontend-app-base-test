import { App } from '@openedx/frontend-base';
import AppThree from './AppThree';
import AppThreeChild from './AppThreeChild';

const config: App = {
  routes: [{
    path: 'three',
    id: 'base-test.three',
    Component: AppThree,
    children: [{
      path: 'child',
      Component: AppThreeChild
    }],
  }],
};

export default config;

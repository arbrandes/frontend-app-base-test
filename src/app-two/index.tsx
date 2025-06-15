import { App } from '@openedx/frontend-base';
import AppTwo from './AppTwo';
import AppTwoChild from './AppTwoChild';

const config: App = {
  routes: [{
    path: 'two',
    id: 'base-test.two',
    Component: AppTwo,
    children: [{
      path: 'child',
      Component: AppTwoChild
    }],
  }],
};

export default config;

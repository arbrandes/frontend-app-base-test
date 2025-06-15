import { App } from '@openedx/frontend-base';
import AppOne from './AppOne';
import AppOneChild from './AppOneChild';

const config: App = {
  routes: [{
    path: '/',
    id: 'base-test.root',
    Component: AppOne,
    handle: {
      role: 'root',
    },
    children: [{
      path: 'child',
      Component: AppOneChild
    }],
  }],
};

export default config;

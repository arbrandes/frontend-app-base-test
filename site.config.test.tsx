import { EnvironmentTypes, SiteConfig } from '@openedx/frontend-base';

const config: SiteConfig = {
  apps: [],

  appId: 'openedxLearnerDashboard',
  environment: EnvironmentTypes.TEST,
  baseUrl: 'http://localhost:8080',
  lmsBaseUrl: 'http://localhost:18000',
  siteName: 'localhost',
  mfeConfigApiUrl: null,
  loginUrl: 'http://localhost:18000/login',
  logoutUrl: 'http://localhost:18000/logout',

  accessTokenCookieName: 'edx-jwt-cookie-header-payload',
  segmentKey: '',

  custom: {
    appId: 'openedxLearnerDashboard',
    FAVICON_URL: 'https://edx-cdn.org/v3/default/favicon.ico',
  }
};

export default config;

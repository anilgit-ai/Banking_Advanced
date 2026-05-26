import { EnvironmentConfig } from '../app/core/models/environment-config.model';

/*
|--------------------------------------------------------------------------
| QA Environment
|--------------------------------------------------------------------------
*/

export const environment: EnvironmentConfig = {
  production: false,

  environmentName: 'QA',

  apiBaseUrl: 'https://qa-api.mybankingapp.com',

  enableLogging: true,

  enableDebugTools: false,

  features: {
    enableNotifications: true,
    enableAuditLogs: true,
    enableLoanModule: true,
    enableReports: true,
  },

  toast: {
    duration: 4000,
    preventDuplicates: true,
    showProgressBar: true,
  },

  animations: {
    enabled: true,
    routeTransitionDuration: 300,
  },

  auth: {
    tokenExpiryBufferInSeconds: 60,
    refreshTokenEnabled: true,
  },

  pagination: {
    defaultPageSize: 20,
    maxPageSize: 100,
  },
};

import { EnvironmentConfig } from '../app/core/models/environment-config.model';

/*
|--------------------------------------------------------------------------
| Production Environment
|--------------------------------------------------------------------------
*/

export const environment: EnvironmentConfig = {
  production: true,

  environmentName: 'PRODUCTION',

  apiBaseUrl: 'https://api.mybankingapp.com',

  enableLogging: false,

  enableDebugTools: false,

  features: {
    enableNotifications: true,
    enableAuditLogs: true,
    enableLoanModule: true,
    enableReports: true,
  },

  toast: {
    duration: 3000,
    preventDuplicates: true,
    showProgressBar: false,
  },

  animations: {
    enabled: true,
    routeTransitionDuration: 200,
  },

  auth: {
    tokenExpiryBufferInSeconds: 30,
    refreshTokenEnabled: true,
  },

  pagination: {
    defaultPageSize: 20,
    maxPageSize: 100,
  },
};

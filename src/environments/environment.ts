import { EnvironmentConfig } from '../app/core/models/environment-config.model';

/*
|--------------------------------------------------------------------------
| Local Development Environment
|--------------------------------------------------------------------------
*/

export const environment: EnvironmentConfig = {
  production: false,

  environmentName: 'LOCAL',

  apiBaseUrl: 'http://localhost:3000',

  enableLogging: true,

  enableDebugTools: true,

  features: {
    enableNotifications: true,
    enableAuditLogs: true,
    enableLoanModule: true,
    enableReports: true,
  },

  toast: {
    duration: 3000,
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
    defaultPageSize: 10,
    maxPageSize: 100,
  },
};

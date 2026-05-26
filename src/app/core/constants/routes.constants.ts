/*
|--------------------------------------------------------------------------
| Centralized Enterprise Routes
|--------------------------------------------------------------------------
| Never hardcode routes inside components/services.
|--------------------------------------------------------------------------
*/
 export const APP_ROUTE_PREFIX =
  'app';

export const ROUTES = {
  AUTH: {
    LOGIN: 'login',
    REGISTER: 'register',
    FORGOT_PASSWORD: 'forgot-password',
  },
 

  APP: {
    DASHBOARD: 'dashboard',
    ACCOUNTS: 'accounts',
    TRANSACTIONS: 'transactions',
    TRANSFERS: 'transfers',
    BENEFICIARIES: 'beneficiaries',
    LOANS: 'loans',
    REPORTS: 'reports',
    ADMIN: 'admin',
    PROFILE: 'profile',
  },

  ERROR: {
    NOT_FOUND: '404',
    UNAUTHORIZED: '401',
  },
} as const;

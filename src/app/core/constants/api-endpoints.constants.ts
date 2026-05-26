/*
|--------------------------------------------------------------------------
| Enterprise API Endpoints
|--------------------------------------------------------------------------
| All backend endpoints must be centralized.
|--------------------------------------------------------------------------
*/

export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    REFRESH_TOKEN: '/auth/refresh-token',
  },

  USERS: {
    BASE: '/users',
    BY_ID: (id: string): string => `/users/${id}`,
  },

  ACCOUNTS: {
    BASE: '/accounts',
    BY_ID: (id: string): string => `/accounts/${id}`,
  },

  TRANSACTIONS: {
    BASE: '/transactions',
    BY_ID: (id: string): string => `/transactions/${id}`,
  },

  BENEFICIARIES: {
    BASE: '/beneficiaries',
    BY_ID: (id: string): string => `/beneficiaries/${id}`,
  },

  LOANS: {
    BASE: '/loans',
    BY_ID: (id: string): string => `/loans/${id}`,
  },
} as const;

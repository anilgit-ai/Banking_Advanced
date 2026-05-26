/*
|--------------------------------------------------------------------------
| Global Enterprise Application Constants
|--------------------------------------------------------------------------
| All reusable UI/application constants must live here.
|--------------------------------------------------------------------------
*/

export const APP_CONSTANTS = {
  VALIDATION_MESSAGES: {
    REQUIRED: 'This field is required',

    INVALID_EMAIL: 'Please enter a valid email address',

    MIN_LENGTH: (length: number): string =>
      `Minimum ${length} characters required`,

    MAX_LENGTH: (length: number): string =>
      `Maximum ${length} characters allowed`,

    INVALID_PASSWORD: 'Password format is invalid',
  },

  TOAST_MESSAGES: {
    SUCCESS_CREATE: 'Record created successfully',

    SUCCESS_UPDATE: 'Record updated successfully',

    SUCCESS_DELETE: 'Record deleted successfully',

    ERROR_CREATE: 'Failed to create record',

    ERROR_UPDATE: 'Failed to update record',

    ERROR_DELETE: 'Failed to delete record',

    ERROR_LOAD: 'Failed to load data',

    SUCCESS_SEARCH: 'Search completed successfully',

    NO_RESULTS: 'No results found',
  },

  STATUS: {
    LOADING: 'Loading...',
    ERROR: 'An error occurred',
    NO_DATA: 'No data available',
  },

  ANIMATION_TIMING: {
    FAST: 200,
    NORMAL: 300,
    SLOW: 500,
  },

  DEBOUNCE_TIMES: {
    SEARCH: 300,
    INPUT: 500,
    BUTTON_CLICK: 1000,
  },
} as const;

/*
|--------------------------------------------------------------------------
| Toast Severity Enum
|--------------------------------------------------------------------------
*/

export enum TOAST_SEVERITY {
  SUCCESS = 'success',
  INFO = 'info',
  WARN = 'warn',
  ERROR = 'error',
}

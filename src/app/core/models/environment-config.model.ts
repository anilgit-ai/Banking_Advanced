/*
|--------------------------------------------------------------------------
| Enterprise Environment Configuration Model
|--------------------------------------------------------------------------
| Strong typing for all environment files.
|--------------------------------------------------------------------------
*/

export interface EnvironmentConfig {
  /*
  |--------------------------------------------------------------------------
  | Environment Flags
  |--------------------------------------------------------------------------
  */

  readonly production: boolean;

  readonly environmentName: string;

  /*
  |--------------------------------------------------------------------------
  | API Configuration
  |--------------------------------------------------------------------------
  */

  readonly apiBaseUrl: string;

  /*
  |--------------------------------------------------------------------------
  | Logging Configuration
  |--------------------------------------------------------------------------
  */

  readonly enableLogging: boolean;

  readonly enableDebugTools: boolean;

  /*
  |--------------------------------------------------------------------------
  | Feature Flags
  |--------------------------------------------------------------------------
  */

  readonly features: {
    readonly enableNotifications: boolean;

    readonly enableAuditLogs: boolean;

    readonly enableLoanModule: boolean;

    readonly enableReports: boolean;
  };

  /*
  |--------------------------------------------------------------------------
  | Toast Configuration
  |--------------------------------------------------------------------------
  */

  readonly toast: {
    readonly duration: number;

    readonly preventDuplicates: boolean;

    readonly showProgressBar: boolean;
  };

  /*
  |--------------------------------------------------------------------------
  | Animation Configuration
  |--------------------------------------------------------------------------
  */

  readonly animations: {
    readonly enabled: boolean;

    readonly routeTransitionDuration: number;
  };

  /*
  |--------------------------------------------------------------------------
  | Authentication Configuration
  |--------------------------------------------------------------------------
  */

  readonly auth: {
    readonly tokenExpiryBufferInSeconds: number;

    readonly refreshTokenEnabled: boolean;
  };

  /*
  |--------------------------------------------------------------------------
  | Pagination Configuration
  |--------------------------------------------------------------------------
  */

  readonly pagination: {
    readonly defaultPageSize: number;

    readonly maxPageSize: number;
  };
}

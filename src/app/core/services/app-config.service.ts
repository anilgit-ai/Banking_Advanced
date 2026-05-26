import { Injectable } from '@angular/core';

import { environment } from '../../../environments/environment';

import { EnvironmentConfig } from '../models/environment-config.model';

/*
|--------------------------------------------------------------------------
| Enterprise App Configuration Service
|--------------------------------------------------------------------------
| Centralized environment configuration access.
|--------------------------------------------------------------------------
*/

@Injectable({
  providedIn: 'root',
})
export class AppConfigService {
  /*
  |--------------------------------------------------------------------------
  | Internal Environment Config
  |--------------------------------------------------------------------------
  */

  private readonly config: EnvironmentConfig = environment;

  /*
  |--------------------------------------------------------------------------
  | Get Entire Config
  |--------------------------------------------------------------------------
  */

  public getConfig(): EnvironmentConfig {
    return this.config;
  }

  /*
  |--------------------------------------------------------------------------
  | Get API Base URL
  |--------------------------------------------------------------------------
  */

  public getApiBaseUrl(): string {
    return this.config.apiBaseUrl;
  }

  /*
  |--------------------------------------------------------------------------
  | Production Check
  |--------------------------------------------------------------------------
  */

  public isProduction(): boolean {
    return this.config.production;
  }

  /*
  |--------------------------------------------------------------------------
  | Logging Enabled Check
  |--------------------------------------------------------------------------
  */

  public isLoggingEnabled(): boolean {
    return this.config.enableLogging;
  }

  /*
  |--------------------------------------------------------------------------
  | Get Feature Flags
  |--------------------------------------------------------------------------
  */

  public getFeatures() {
    return this.config.features;
  }
}

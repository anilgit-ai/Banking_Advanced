import { Injectable } from '@angular/core';

import { AppConfigService } from './app-config.service';

/*
|--------------------------------------------------------------------------
| Enterprise Logger Service
|--------------------------------------------------------------------------
| Environment-aware centralized logging service.
|--------------------------------------------------------------------------
*/

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  constructor(private readonly appConfigService: AppConfigService) {}

  /*
  |--------------------------------------------------------------------------
  | Info Logger
  |--------------------------------------------------------------------------
  */

  public info(message: string): void {
    if (this.appConfigService.isLoggingEnabled()) {
      console.info(message);
    }
  }

  /*
  |--------------------------------------------------------------------------
  | Warning Logger
  |--------------------------------------------------------------------------
  */

  public warn(message: string): void {
    if (this.appConfigService.isLoggingEnabled()) {
      console.warn(message);
    }
  }

  /*
  |--------------------------------------------------------------------------
  | Error Logger
  |--------------------------------------------------------------------------
  */

  public error(message: string): void {
    if (this.appConfigService.isLoggingEnabled()) {
      console.error(message);
    }
  }
}

import { Injectable } from '@angular/core';

import { AppConfigService } from './app-config.service';

/*
|--------------------------------------------------------------------------
| Enterprise Feature Flag Service
|--------------------------------------------------------------------------
| Centralized feature management.
|--------------------------------------------------------------------------
*/

@Injectable({
  providedIn: 'root',
})
export class FeatureFlagService {
  constructor(private readonly appConfigService: AppConfigService) {}

  /*
  |--------------------------------------------------------------------------
  | Loan Module Enabled
  |--------------------------------------------------------------------------
  */

  public isLoanModuleEnabled(): boolean {
    return this.appConfigService.getFeatures().enableLoanModule;
  }

  /*
  |--------------------------------------------------------------------------
  | Reports Enabled
  |--------------------------------------------------------------------------
  */

  public isReportsEnabled(): boolean {
    return this.appConfigService.getFeatures().enableReports;
  }

  /*
  |--------------------------------------------------------------------------
  | Notifications Enabled
  |--------------------------------------------------------------------------
  */

  public areNotificationsEnabled(): boolean {
    return this.appConfigService.getFeatures().enableNotifications;
  }
}

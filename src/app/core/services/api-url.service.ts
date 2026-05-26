import { Injectable } from '@angular/core';

import { AppConfigService } from './app-config.service';

/*
|--------------------------------------------------------------------------
| Enterprise API URL Builder Service
|--------------------------------------------------------------------------
| Responsible for generating full API URLs.
|--------------------------------------------------------------------------
*/

@Injectable({
  providedIn: 'root',
})
export class ApiUrlService {
  constructor(private readonly appConfigService: AppConfigService) {}

  /*
  |--------------------------------------------------------------------------
  | Build Full API URL
  |--------------------------------------------------------------------------
  */

  public buildUrl(endpoint: string): string {
    const baseUrl = this.appConfigService.getApiBaseUrl();

    return `${baseUrl}${endpoint}`;
  }
}

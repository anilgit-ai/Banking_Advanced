import { HttpClient, HttpParams } from '@angular/common/http';

import { inject, Injectable } from '@angular/core';

import { Observable, retry } from 'rxjs';

import { ApiResponse } from '../models/api-response.model';

import { ApiUrlService } from './api-url.service';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly http = inject(HttpClient);

  private readonly apiUrlService = inject(ApiUrlService);

  /*
  |--------------------------------------------------------------------------
  | GET Request
  |--------------------------------------------------------------------------
  */

  public get<T>(
    endpoint: string,
    params?: HttpParams,
  ): Observable<ApiResponse<T>> {
    return this.http
      .get<ApiResponse<T>>(this.apiUrlService.buildUrl(endpoint), { params })
      .pipe(retry(1));
  }

  /*
  |--------------------------------------------------------------------------
  | POST Request
  |--------------------------------------------------------------------------
  */

  public post<T>(endpoint: string, body: unknown): Observable<ApiResponse<T>> {
    return this.http
      .post<ApiResponse<T>>(this.apiUrlService.buildUrl(endpoint), body)
      .pipe(retry(1));
  }

  /*
  |--------------------------------------------------------------------------
  | PUT Request
  |--------------------------------------------------------------------------
  */

  public put<T>(endpoint: string, body: unknown): Observable<ApiResponse<T>> {
    return this.http
      .put<ApiResponse<T>>(this.apiUrlService.buildUrl(endpoint), body)
      .pipe(retry(1));
  }

  /*
  |--------------------------------------------------------------------------
  | DELETE Request
  |--------------------------------------------------------------------------
  */

  public delete<T>(endpoint: string): Observable<ApiResponse<T>> {
    return this.http
      .delete<ApiResponse<T>>(this.apiUrlService.buildUrl(endpoint))
      .pipe(retry(1));
  }
}

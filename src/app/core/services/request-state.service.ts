import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RequestStateService<T> {
  /*
  |--------------------------------------------------------------------------
  | Loading State
  |--------------------------------------------------------------------------
  */

  public readonly loading = signal<boolean>(false);

  /*
  |--------------------------------------------------------------------------
  | Data State
  |--------------------------------------------------------------------------
  */

  public readonly data = signal<T | null>(null);

  /*
  |--------------------------------------------------------------------------
  | Error State
  |--------------------------------------------------------------------------
  */

  public readonly error = signal<string | null>(null);

  /*
  |--------------------------------------------------------------------------
  | Start Loading
  |--------------------------------------------------------------------------
  */

  public startLoading(): void {
    this.loading.set(true);

    this.error.set(null);
  }

  /*
  |--------------------------------------------------------------------------
  | Set Success
  |--------------------------------------------------------------------------
  */

  public setSuccess(data: T): void {
    this.loading.set(false);

    this.data.set(data);
  }

  /*
  |--------------------------------------------------------------------------
  | Set Error
  |--------------------------------------------------------------------------
  */

  public setError(error: string): void {
    this.loading.set(false);

    this.error.set(error);
  }
}

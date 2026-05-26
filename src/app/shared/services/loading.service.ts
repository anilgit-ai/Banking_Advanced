import { Injectable, computed, signal } from '@angular/core';

/*
|--------------------------------------------------------------------------
| Enterprise Loading Service
|--------------------------------------------------------------------------
| Centralized loading state management using Angular Signals.
|--------------------------------------------------------------------------
*/

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  /*
  |--------------------------------------------------------------------------
  | Internal Loading State
  |--------------------------------------------------------------------------
  */

  private readonly loadingSignal = signal<boolean>(false);

  /*
  |--------------------------------------------------------------------------
  | Public Readonly Loading State
  |--------------------------------------------------------------------------
  */

  public readonly isLoading = computed(() => this.loadingSignal());

  /*
  |--------------------------------------------------------------------------
  | Show Loader
  |--------------------------------------------------------------------------
  */

  public showLoader(): void {
    this.loadingSignal.set(true);
  }

  /*
  |--------------------------------------------------------------------------
  | Hide Loader
  |--------------------------------------------------------------------------
  */

  public hideLoader(): void {
    this.loadingSignal.set(false);
  }
}

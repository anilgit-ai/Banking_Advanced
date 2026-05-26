import { Injectable, computed, inject, signal } from '@angular/core';
import { finalize } from 'rxjs';

import { Account } from '../../core/models/account.model';
import { AccountsApiService } from '../../features/accounts/services/accounts-api.service';

/*
|--------------------------------------------------------------------------
| Accounts Store
|--------------------------------------------------------------------------
| This store manages:
| 1. Accounts data
| 2. Loading state
| 3. Error state
| 4. Derived/computed values
|
| Angular Signals are used here for reactive state management.
|--------------------------------------------------------------------------
*/

@Injectable({
  providedIn: 'root',
})
export class AccountsStore {
  /*
  |--------------------------------------------------------------------------
  | Dependency Injection
  |--------------------------------------------------------------------------
  | Injecting API service to communicate with backend.
  |--------------------------------------------------------------------------
  */
  private readonly accountsApiService = inject(AccountsApiService);

  /*
  |--------------------------------------------------------------------------
  | Private Writable Signals (Internal State)
  |--------------------------------------------------------------------------
  | These signals hold and update the actual state.
  |--------------------------------------------------------------------------
  */

  // Stores list of accounts
  private readonly accountsSignal = signal<Account[]>([]);

  // Tracks API loading status
  private readonly loadingSignal = signal<boolean>(false);

  // Stores API error message
  private readonly errorSignal = signal<string | null>(null);

  /*
  |--------------------------------------------------------------------------
  | Public Read-Only Computed Signals
  |--------------------------------------------------------------------------
  | Exposing state as computed signals prevents direct mutation
  | from components.
  |--------------------------------------------------------------------------
  */

  // Public accounts state
  public readonly accounts = computed(() => this.accountsSignal());

  // Public loading state
  public readonly loading = computed(() => this.loadingSignal());

  // Public error state
  public readonly error = computed(() => this.errorSignal());

  /*
  |--------------------------------------------------------------------------
  | Derived State
  |--------------------------------------------------------------------------
  | Computes total balance dynamically whenever accounts change.
  |--------------------------------------------------------------------------
  */
  public readonly totalBalance = computed(() => {
    return this.accounts().reduce(
      (total, account) => total + account.balance,
      0,
    );
  });

  /*
  |--------------------------------------------------------------------------
  | Load Accounts
  |--------------------------------------------------------------------------
  | Fetches accounts from backend API.
  |
  | Steps:
  | 1. Set loading to true
  | 2. Clear previous errors
  | 3. Call API
  | 4. Update accounts on success
  | 5. Update error state on failure
  | 6. Stop loading after API completes
  |--------------------------------------------------------------------------
  */
  public loadAccounts(): void {
    // Start loading
    this.loadingSignal.set(true);

    // Reset old errors
    this.errorSignal.set(null);

    // API call
    this.accountsApiService
      .getAccounts()
      .pipe(
        /*
        |--------------------------------------------------------------------------
        | finalize()
        |--------------------------------------------------------------------------
        | Executes after success or error.
        | Used here to stop loading state.
        |--------------------------------------------------------------------------
        */
        finalize(() => {
          this.loadingSignal.set(false);
        }),
      )
      .subscribe({
        /*
        |--------------------------------------------------------------------------
        | Success Callback
        |--------------------------------------------------------------------------
        | Update accounts state with API response.
        |--------------------------------------------------------------------------
        */
        next: (response) => {
          this.accountsSignal.set(response.data);
        },

        /*
        |--------------------------------------------------------------------------
        | Error Callback
        |--------------------------------------------------------------------------
        | Update error state when API fails.
        |--------------------------------------------------------------------------
        */
        error: () => {
          this.errorSignal.set('Failed to load accounts');
        },
      });
  }
}

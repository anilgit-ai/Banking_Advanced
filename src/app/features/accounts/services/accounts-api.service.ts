import { Injectable } from '@angular/core';

import { Observable, of, delay } from 'rxjs';

import { ApiResponse } from '../../../core/models/api-response.model';

import { Account } from '../../../core/models/account.model';

/*
|--------------------------------------------------------------------------
| Enterprise Accounts API Service
|--------------------------------------------------------------------------
*/

@Injectable({
  providedIn: 'root',
})
export class AccountsApiService {
  /*
  |--------------------------------------------------------------------------
  | Mock Accounts Request
  |--------------------------------------------------------------------------
  */

  public getAccounts(): Observable<ApiResponse<Account[]>> {
    return of({
      success: true,

      message: 'Accounts loaded successfully',

      data: [
        {
          id: crypto.randomUUID(),

          accountNumber: '1234567890',

          accountType: 'Savings',

          balance: 250000,

          currency: 'INR',
        },

        {
          id: crypto.randomUUID(),

          accountNumber: '9876543210',

          accountType: 'Current',

          balance: 500000,

          currency: 'INR',
        },
      ],
    }).pipe(delay(1000));
  }
}

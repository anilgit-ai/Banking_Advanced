import { Injectable, computed, signal } from '@angular/core';

import { Transaction } from '../../core/models/transaction.model';

/*
|--------------------------------------------------------------------------
| Enterprise Transactions Store
|--------------------------------------------------------------------------
*/

@Injectable({
  providedIn: 'root',
})
export class TransactionsStore {
  /*
  |--------------------------------------------------------------------------
  | Internal Transactions State
  |--------------------------------------------------------------------------
  */

  private readonly transactionsSignal = signal<Transaction[]>([
    {
      id: crypto.randomUUID(),

      referenceNumber: 'TXN001',

      amount: 5000,

      transactionType: 'Credit',

      status: 'Success',

      createdAt: new Date().toISOString(),
    },

    {
      id: crypto.randomUUID(),

      referenceNumber: 'TXN002',

      amount: 2500,

      transactionType: 'Debit',

      status: 'Pending',

      createdAt: new Date().toISOString(),
    },
  ]);

  /*
  |--------------------------------------------------------------------------
  | Public Transactions
  |--------------------------------------------------------------------------
  */

  public readonly transactions = computed(() => this.transactionsSignal());
}

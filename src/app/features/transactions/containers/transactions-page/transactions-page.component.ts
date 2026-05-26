import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { TransactionsStore } from '../../../../store/transactions/transactions.store';

import { TransactionTableComponent } from '../../components/transaction-table/transaction-table.component';

import { AppCardComponent } from '../../../../shared/ui/app-card/app-card.component';

/*
|--------------------------------------------------------------------------
| Enterprise Transactions Page
|--------------------------------------------------------------------------
*/

@Component({
  selector: 'app-transactions-page',

  standalone: true,

  imports: [TransactionTableComponent, AppCardComponent],

  templateUrl: './transactions-page.component.html',

  styleUrl: './transactions-page.component.scss',

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransactionsPageComponent {
  public readonly transactionsStore = inject(TransactionsStore);
}

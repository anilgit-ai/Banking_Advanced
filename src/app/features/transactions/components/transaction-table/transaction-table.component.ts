import { Component, Input } from '@angular/core';
import { Transaction } from '../../../../core/models/transaction.model';
import { TableColumn } from '../../../../core/models/table-column.model';
import { TableAction } from '../../../../core/models/table-action.model';
import { AppTableComponent } from "../../../../shared/ui/app-table/app-table.component";

@Component({
  selector: 'app-transaction-table',
  standalone: true,
  imports: [AppTableComponent],
  templateUrl: './transaction-table.component.html',
  styleUrl: './transaction-table.component.scss',
})
export class TransactionTableComponent {
  @Input({ required: true })
  public transactions: readonly Transaction[] = [];

  /*
  |--------------------------------------------------------------------------
  | Table Columns
  |--------------------------------------------------------------------------
  */

  public readonly columns: readonly TableColumn<Transaction>[] = [
    {
      key: 'referenceNumber',

      header: 'Reference',
    },

    {
      key: 'amount',

      header: 'Amount',
    },

    {
      key: 'transactionType',

      header: 'Type',
    },

    {
      key: 'status',

      header: 'Status',
    },
  ];

  /*
  |--------------------------------------------------------------------------
  | Table Actions
  |--------------------------------------------------------------------------
  */

  public readonly actions: readonly TableAction<Transaction>[] = [
    {
      label: 'View',

      icon: 'pi pi-eye',

      action: (transaction) => {
        console.log(transaction);
      },
    },
  ];
}

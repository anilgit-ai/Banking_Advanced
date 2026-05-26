import { Routes } from '@angular/router';

import { TransactionsPageComponent } from './containers/transactions-page/transactions-page.component';

/*
|--------------------------------------------------------------------------
| Enterprise Transactions Routes
|--------------------------------------------------------------------------
*/

export const transactionsRoutes: Routes = [
  {
    path: '',

    component: TransactionsPageComponent,

    data: {
      animation: 'TransactionsPage',
    },
  },
];

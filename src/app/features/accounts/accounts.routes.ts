import { Routes } from '@angular/router';
import { AccountsPageComponent } from './containers/accounts-page/accounts-page.component';

export const accountsRoutes: Routes = [
  {
    path: '',

    component: AccountsPageComponent,

    data: {
      animation: 'AccountsPage',
    },
  },
];

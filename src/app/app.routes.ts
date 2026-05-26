import { Routes } from '@angular/router';

import { ROUTES } from './core/constants/routes.constants';
import { AuthLayoutComponent } from './layouts/layouts/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './layouts/layouts/main-layout/main-layout.component';
import { animation } from '@angular/animations';

/*
|--------------------------------------------------------------------------
| Enterprise Application Routes
|--------------------------------------------------------------------------
*/

export const appRoutes: Routes = [
  /*
  |--------------------------------------------------------------------------
  | Public Routes
  |--------------------------------------------------------------------------
  */

  {
    path: '',

    component: AuthLayoutComponent,

    children: [
      {
        path: '',

        redirectTo: ROUTES.AUTH.LOGIN,

        pathMatch: 'full',
      },

      {
        path: ROUTES.AUTH.LOGIN,

        loadChildren: () =>
          import('./features/auth/auth.routes').then(
            (routes) => routes.authRoutes,
          ),
      },
    ],
  },

  /*
  |--------------------------------------------------------------------------
  | Protected Banking Routes
  |--------------------------------------------------------------------------
  */

  {
    path: 'app',

    component: MainLayoutComponent,

    children: [
      {
        path: ROUTES.APP.DASHBOARD,

        loadChildren: () =>
          import('./features/dashboard/dashboard.routes').then(
            (routes) => routes.dashboardRoutes,
          ),

        data: {
          animation: 'DashboardFeature',
        },
      },
      {
        path: ROUTES.APP.ACCOUNTS,
        loadChildren: () =>
          import('./features/accounts/accounts.routes').then(
            (routes) => routes.accountsRoutes,
          ),
        data: {
          animation: 'AccountsPage',
        },
      },
      {
        path: ROUTES.APP.TRANSACTIONS,

        loadChildren: () =>
          import('./features/transactions/transactions.routes').then(
            (routes) => routes.transactionsRoutes,
          ),
      },
    ],
  },

  /*
  |--------------------------------------------------------------------------
  | Wildcard Route
  |--------------------------------------------------------------------------
  */

  {
    path: '**',

    redirectTo: ROUTES.AUTH.LOGIN,
  },
];

import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

import { RouterOutlet } from '@angular/router';



import { routeAnimations } from '../../../core/animations/route.animations';

import {
  APP_ROUTE_PREFIX,
  ROUTES,
} from '../../../core/constants/routes.constants';

import { MenuItem } from '../../../core/models/menu-item.model';
import { AppSidebarComponent } from "../../sidebar/app-sidebar/app-sidebar.component";
import { AppHeaderComponent } from "../../header/app-header/app-header.component";

/*
|--------------------------------------------------------------------------
| Enterprise Main Layout
|--------------------------------------------------------------------------
*/

@Component({
  selector: 'app-main-layout',

  standalone: true,

  imports: [RouterOutlet, AppSidebarComponent, AppHeaderComponent],

  templateUrl: './main-layout.component.html',

  styleUrl: './main-layout.component.scss',

  animations: [routeAnimations],

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainLayoutComponent {
  /*
  |--------------------------------------------------------------------------
  | Sidebar State
  |--------------------------------------------------------------------------
  */

  public readonly sidebarOpen = signal<boolean>(true);

  /*
  |--------------------------------------------------------------------------
  | Enterprise Navigation Menu
  |--------------------------------------------------------------------------
  */

  public readonly menuItems: readonly MenuItem[] = [
    {
      label: 'Dashboard',

      icon: 'pi pi-home',

      route: `/${APP_ROUTE_PREFIX}/${ROUTES.APP.DASHBOARD}`,
    },

    {
      label: 'Accounts',

      icon: 'pi pi-wallet',

      route: `/${APP_ROUTE_PREFIX}/${ROUTES.APP.ACCOUNTS}`,
    },

    {
      label: 'Transactions',

      icon: 'pi pi-sync',

      route: `/${APP_ROUTE_PREFIX}/${ROUTES.APP.TRANSACTIONS}`,
    },

    {
      label: 'Loans',

      icon: 'pi pi-credit-card',

      route: `/${APP_ROUTE_PREFIX}/${ROUTES.APP.LOANS}`,
    },
  ];

  /*
  |--------------------------------------------------------------------------
  | Toggle Sidebar
  |--------------------------------------------------------------------------
  */

  public toggleSidebar(): void {
    this.sidebarOpen.update((value) => !value);
  }

  /*
  |--------------------------------------------------------------------------
  | Route Animation Preparation
  |--------------------------------------------------------------------------
  */

  public prepareRoute(outlet: RouterOutlet): string {
    return outlet?.activatedRouteData?.['animation'] ?? '';
  }
}

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AppButtonComponent } from '../../../../shared/ui/app-button/app-button.component';
import { Router } from '@angular/router';
import {
  APP_ROUTE_PREFIX,
  ROUTES,
} from '../../../../core/constants/routes.constants';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [AppButtonComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  constructor(private readonly router: Router) {}
  public login(): void {
    this.router.navigate([APP_ROUTE_PREFIX, ROUTES.APP.DASHBOARD]);
  }
}

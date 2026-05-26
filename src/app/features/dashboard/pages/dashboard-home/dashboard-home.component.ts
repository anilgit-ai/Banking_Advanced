import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AppCardComponent } from '../../../../shared/ui/app-card/app-card.component';

@Component({
  selector: 'app-dashboard-home',
  standalone: true,
  imports: [AppCardComponent],
  templateUrl: './dashboard-home.component.html',
  styleUrl: './dashboard-home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardHomeComponent {}

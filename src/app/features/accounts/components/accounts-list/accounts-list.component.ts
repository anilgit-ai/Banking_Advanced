import { CommonModule, CurrencyPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AppCardComponent } from '../../../../shared/ui/app-card/app-card.component';
import { Account } from '../../../../core/models/account.model';

@Component({
  selector: 'app-accounts-list',
  standalone: true,
  imports: [CommonModule, CurrencyPipe, AppCardComponent],
  templateUrl: './accounts-list.component.html',
  styleUrl: './accounts-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountsListComponent {
  @Input({ required: true }) public accounts: readonly Account[] = [];
}

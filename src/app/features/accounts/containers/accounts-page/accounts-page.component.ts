import { CommonModule, CurrencyPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { LoaderComponent } from '../../../../shared/components/loader/loader.component';
import { EmptyStateComponent } from '../../../../shared/components/empty-state/empty-state.component';
import { AccountsListComponent } from '../../components/accounts-list/accounts-list.component';
import { AppCardComponent } from '../../../../shared/ui/app-card/app-card.component';
import { AccountsStore } from '../../../../store/accounts/accounts.store';

@Component({
  selector: 'app-accounts-page',
  standalone: true,
  imports: [
    CommonModule,
    CurrencyPipe,
    LoaderComponent,
    EmptyStateComponent,
    AccountsListComponent,
    AppCardComponent,
  ],
  templateUrl: './accounts-page.component.html',
  styleUrl: './accounts-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountsPageComponent implements OnInit {
  //ACCOUNTS STORE
  public readonly accountsStore = inject(AccountsStore);
  //INITIALIZE ACCOUNTS
  public ngOnInit(): void {
    this.accountsStore.loadAccounts();
  }
}

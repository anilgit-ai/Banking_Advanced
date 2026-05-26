import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TableColumn } from '../../../core/models/table-column.model';
import { TableAction } from '../../../core/models/table-action.model';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app-table.component.html',
  styleUrl: './app-table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppTableComponent<T> {
  @Input({ required: true }) public columns: readonly TableColumn<T>[] = [];
  @Input({ required: true }) public data: readonly T[] = [];
  @Input() public actions: readonly TableAction<T>[] = [];
}

import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

type ButtonVarient = 'primary' | 'secondary' | 'danger';
@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app-button.component.html',
  styleUrl: './app-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppButtonComponent {
  //BUTTON LABEL
  @Input({ required: true }) public label!: string;

  //BUTTON VARIENT
  @Input() public varient: ButtonVarient = 'primary';

  //DISABLE STATE
  @Input() public disable = false;

  //CLICK EVENT
  @Output() public readonly buttonClick = new EventEmitter<void>();
}

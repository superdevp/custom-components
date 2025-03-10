import { Component, Input } from '@angular/core';
import { ButtonStatus } from '../../enum';
import { BUTTONSHAPES, BUTTONSIZES, BUTTONSTATES, BUTTONTYPES, BUTTONVARIANTS } from '../../types';
import { CommonModule, NgClass } from '@angular/common';

@Component({
  selector: 'u-button',
  imports: [CommonModule, NgClass],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() label: string = '';
  @Input() variant: BUTTONVARIANTS = 'primary';
  @Input() size: BUTTONSIZES = 'medium';
  @Input() shape: BUTTONSHAPES = 'rounded';
  @Input() state: BUTTONSTATES = ButtonStatus.DEFAULT;
  @Input() type: BUTTONTYPES = 'contained';

  ButtonStatus = ButtonStatus;
}

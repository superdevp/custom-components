import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { INPUTTYPES, INPUTSTATES, INPUTVARIANTS, INPUTCOLORS } from '../../types';
@Component({
  selector: 'u-input',
  imports: [CommonModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  @Input() label: string = '';
  @Input() errorMessage: string = '';
  @Input() variant: INPUTVARIANTS = 'default';
  @Input() state: INPUTSTATES = 'default';
  @Input() type: INPUTTYPES = 'text';
  @Input() color: INPUTCOLORS = 'primary';
}

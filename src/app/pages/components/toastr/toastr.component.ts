import { Component, inject } from '@angular/core';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-toastr',
  imports: [ButtonComponent],
  templateUrl: './toastr.component.html',
  styleUrl: './toastr.component.scss'
})
export class ToastrComponent {
  private toastr = inject(ToastrService);

  openToastr(type: string) {
    switch (type) {
      case 'success':
        this.toastr.success('This is a success toastr!');
        break;
      case 'info':
        this.toastr.info('This is an info toastr!');
        break;
      case 'warning':
        this.toastr.warning('This is a warning toastr!');
        break;
      case 'error':
        this.toastr.error('This is an error toastr!');
        break;
      default:
        break;
    }
  }
}

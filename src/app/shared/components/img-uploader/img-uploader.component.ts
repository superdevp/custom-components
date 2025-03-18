import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'u-img-uploader',
  imports: [ FormsModule ],
  templateUrl: './img-uploader.component.html',
  styleUrl: './img-uploader.component.scss'
})
export class ImageUploaderComponent {
  files: Array<File> = [];
  inputFiles: any;

  imgURLS: Array<string> = [];

  private cdRef = inject(ChangeDetectorRef);

  chooseFile(event: any) {
    if(event.target) {
      const input = event.target as HTMLInputElement;
      if (input && input.files && input.files[0]) {
        this.files.push(input.files[0]);
        this.imgURLS.push(this.createURL(input.files[0]));
        this.inputFiles = '';
        this.cdRef.detectChanges();
      }
    }
  }

  createURL(file: File) {
    return URL.createObjectURL(file);
  }

  removeObject(index: number) {
    this.files.splice(index, 1);
    this.imgURLS.splice(index, 1);
  }
}

import { Component } from '@angular/core';
import { ButtonsComponent } from "../components/buttons/buttons.component";
import { InputsComponent } from "../components/inputs/inputs.component";
import { ToastrComponent } from "../components/toastr/toastr.component";
import { LoadersComponent } from "../components/loaders/loaders.component";
import { ImgUploaderComponent } from "../components/img-uploader/img-uploader.component";

@Component({
  selector: 'app-main',
  imports: [ButtonsComponent, InputsComponent, ToastrComponent, LoadersComponent, ImgUploaderComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}

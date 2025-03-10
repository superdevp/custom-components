import { Component } from '@angular/core';
import { ButtonsComponent } from "../components/buttons/buttons.component";
import { InputsComponent } from "../components/inputs/inputs.component";

@Component({
  selector: 'app-main',
  imports: [ButtonsComponent, InputsComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}

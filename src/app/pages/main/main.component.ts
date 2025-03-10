import { Component } from '@angular/core';
import { ButtonsComponent } from "../components/buttons/buttons.component";

@Component({
  selector: 'app-main',
  imports: [ButtonsComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}

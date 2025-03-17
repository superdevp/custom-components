import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'u-loader',
  imports: [NgClass],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss'
})
export class LoaderComponent {
  @Input() type: "spinner" | "dot" = "spinner";
  @Input() size: "small" | "medium" | "large" = "medium";
  @Input() color: "primary" | "secondary" | "tertiary" = "primary";
}

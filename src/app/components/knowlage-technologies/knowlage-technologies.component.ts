import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-knowlage-technologies',
  templateUrl: './knowlage-technologies.component.html',
  styleUrl: './knowlage-technologies.component.scss'
})
export class KnowlageTechnologiesComponent {
  @Input() img : string = "";
}

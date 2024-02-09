import { Component } from '@angular/core';
import { MatPseudoCheckbox } from '@angular/material/core';
import { MaterialModule } from '../../material/material.module';


@Component({
  selector: 'app-catalogue',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './catalogue.component.html',
  styleUrl: './catalogue.component.css'
})
export class CatalogueComponent {

}

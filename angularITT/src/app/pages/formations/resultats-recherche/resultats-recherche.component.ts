import { Component, Input } from '@angular/core';
import Formation from '../../../models/formation.model';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../../material/material.module';

@Component({
  selector: 'app-resultats-recherche',
  standalone: true,
  imports: [MaterialModule, RouterModule],
  templateUrl: './resultats-recherche.component.html',
  styleUrl: './resultats-recherche.component.css'
})
export class ResultatsRechercheComponent {
  @Input()
  formations: Formation[] = [];
}

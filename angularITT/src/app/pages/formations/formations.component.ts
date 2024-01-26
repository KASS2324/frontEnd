import { Component } from '@angular/core';
import Formation from '../../models/formation.model';
import { FormationService } from '../../services/formation.service';

@Component({
  selector: 'app-formations',
  standalone: true,
  imports: [],
  templateUrl: './formations.component.html',
  styleUrl: './formations.component.css'
})
export class FormationsComponent {

  formations: Formation[] = [];

  constructor(private formationService: FormationService){}

  ngOnInit(): void {
    this.formationService.getFormations().subscribe((formations) => { this.formations = formations });
  }
}

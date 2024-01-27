import { Component } from '@angular/core';
import Formation from '../../models/formation.model';
import { FormationService } from '../../services/formation.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-formations',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './formations.component.html',
  styleUrl: './formations.component.css'
})
export class FormationsComponent {

  formations: Formation[] = [];

  selectionForm: FormGroup = this.formBuilder.group({
    ville: ['']
  });

  // Ajout d'un booléen pour vérifier si le formulaire est soumis
  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder, private formationService: FormationService){}

  ngOnInit(): void {
    this.formationService.getFormations().subscribe((formations) => { this.formations = formations });
  }

  public onSubmit(): void {
    this.submitted = true;
    const ville = this.selectionForm.value.ville;
    console.log("ville : "+ville);
    if(ville != "Toutes"){
      this.formationService.getFormationsByVille(ville).subscribe((formations) => { this.formations = formations });
    }else{
      this.formationService.getFormations().subscribe((formations) => { this.formations = formations });
    }
  }
  public get form() {
    return this.selectionForm.controls;
  }
}

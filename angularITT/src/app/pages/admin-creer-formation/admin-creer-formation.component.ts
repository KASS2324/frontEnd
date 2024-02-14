import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormationService } from '../../services/formation.service';
import Formation from '../../models/formation.model';

@Component({
  selector: 'app-admin-creer-formation',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './admin-creer-formation.component.html',
  styleUrl: './admin-creer-formation.component.css'
})
export class AdminCreerFormationComponent {

  //Variable Formation
  formation!: Formation;
  //formation: any[]=[];

  // On déclare un FormGroup avec une méthode `group()` lié au formBuilder
  formationForm: FormGroup = this.formBuilder.group({
    nom: ['', [ Validators.minLength(2), Validators.required]],
    categorie: [''],
    theme: [''],
    sousTheme: [''],
    prix: ['', [Validators.minLength(2), Validators.required]],
    description: [''],
    duree: ['', [Validators.minLength(1), Validators.required ]],
    ville: ['', [ Validators.minLength(2), Validators.required]]
    
  });
  
  categories: String[] = [];
  themes: String[] = [];
  sousThemes: String[] = [];

  // Ajout d'un booléen pour vérifier si le formulaire est soumis
  submitted: boolean = false;

  // Déclaration du formbuilder dans le constructeur
  constructor(private formBuilder: FormBuilder, private formationService:FormationService){}

  private addFormation(): void {
    this.formationService.createFormation(this.formationForm.value).subscribe((formationForm) => {this.formation = formationForm});
    this.formationForm.reset();
    this.submitted = false;
  }

  // Appel Service ? 
  public onSubmit(): void {
    this.submitted = true
    if (this.formationForm.valid) {
      this.addFormation();
    }
  }

  public get form() {
    return this.formationForm.controls;
  }
}

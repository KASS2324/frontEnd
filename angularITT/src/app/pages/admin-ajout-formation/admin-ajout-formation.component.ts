import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-ajout-formation',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './admin-ajout-formation.component.html',
  styleUrl: './admin-ajout-formation.component.css'
})
export class AdminAjoutFormationComponent {

  //Variable Users
  users: any[]=[];
  //demandeSpe!: DemandeSpe;
 // demandeSpeUSer!:DemandeSpeUser;

  // On déclare un FormGroup avec une méthode `group()` lié au formBuilder
  userForm: FormGroup = this.formBuilder.group({
    nom: ['', [ Validators.minLength(2), Validators.required]],
    prenom: ['', [Validators.minLength(2), Validators.required]],
    email: ['', [Validators.email, Validators.required ]],
    // On déclare ici un tableau de FormArray
    // Dans lequel on ajoute un contrôle pour un téléphone
    telephones: [''],
    entreprise: [''],
    theme: [''],
    typeFormation:['',],
    demande: ['', [Validators.minLength(100), Validators.required]],

  });
  categories: String[] = [];
  themes: String[] = [];
  sousThemes: String[] = [];
  

  // Ajout d'un booléen pour vérifier si le formulaire est soumis
  submitted: boolean = false;

  // Déclaration du formbuilder dans le constructeur
  constructor(private formBuilder: FormBuilder) {}

  private addUser(): void {
    this.users.push(this.userForm.value);

   

    //this.demandeSpeService.createDemandeSpe(this.demandeSpe).subscribe((userForm) => {this.demandeSpe = userForm});
    this.userForm.reset();
    this.submitted = false;
  }

  // Appel Service ? 
  public onSubmit(): void {
    this.submitted = true
    if (this.userForm.valid) {
      this.addUser();
    }
  }
  public get form() {
    return this.userForm.controls;
  }
}

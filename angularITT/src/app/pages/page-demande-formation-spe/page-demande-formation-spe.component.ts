import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import DemandeSpe from '../../models/demande-spe.model';
import { DemandeSpeService } from '../../services/demande-spe.service';

@Component({
  selector: 'app-page-demande-formation-spe',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './page-demande-formation-spe.component.html',
  styleUrl: './page-demande-formation-spe.component.css'
})
export class PageDemandeFormationSpeComponent {

  //Variable Users
  users: any[]=[];
  demandeSpe!: DemandeSpe;

  // On déclare un FormGroup avec une méthode `group()` lié au formBuilder
  userForm: FormGroup = this.formBuilder.group({
    nom: ['', [ Validators.minLength(2), Validators.required]],
    prenom: ['', [Validators.minLength(2), Validators.required]],
    email: ['', [Validators.email, Validators.required ]],
    // On déclare ici un tableau de FormArray
    // Dans lequel on ajoute un contrôle pour un téléphone
    telephones: this.formBuilder.array([
      this.formBuilder.control('', [Validators.minLength(10), Validators.required]),
    ]),
    entreprise: [''],
    typeFormation:['',],
    demande: ['', [Validators.minLength(2), Validators.required]],

  });

  // Ajout d'un booléen pour vérifier si le formulaire est soumis
  submitted: boolean = false;

  // Déclaration du formbuilder dans le constructeur
  constructor(private formBuilder: FormBuilder,private demandeSpeService:DemandeSpeService) {}

  private addUser(): void {
    this.users.push(this.userForm.value);
    this.demandeSpeService.createDemandeSpe(this.userForm.value).subscribe((userForm) => {this.demandeSpe = userForm});
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

// Getter pour accéder à la liste des téléphones
  public get telephones(): FormArray {
    return this.userForm.get('telephones') as FormArray;
  }
  // Méthode pour ajouter un contrôle de téléphone
  // La méthode va push un contrôle de téléphone dans le tableau 'téléphones'
  public addTelephone(): void {
    this.telephones.push(this.formBuilder.control('', [Validators.minLength(10), Validators.required]));
  }
  // Méthode pour supprimer un contrôle de téléphone
  // On retire le dernier élément de l'index
  // NB : le compte commence à 1, l'index commence à 0
  public removeTelephone(): void {
    this.telephones.removeAt(this.telephones.length - 1);
  }

  //Property Checked
  
  
}

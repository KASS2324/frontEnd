import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import DemandeSpe from '../../models/demande-spe.model';
import { DemandeSpeService } from '../../services/demande-spe.service';
import DemandeSpeUser from '../../models/demande-spe-user.model';
import { ElementRef } from '@angular/core';

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
  demandeSpeUSer!:DemandeSpeUser;

  // On déclare un FormGroup avec une méthode `group()` lié au formBuilder
  userForm: FormGroup = this.formBuilder.group({
    nom: ['', [ Validators.minLength(2), Validators.required]],
    prenom: ['', [Validators.minLength(2), Validators.required]],
    email: ['', [Validators.email, Validators.required ]],
    // On déclare ici un tableau de FormArray
    // Dans lequel on ajoute un contrôle pour un téléphone
    telephones: [''],
    entreprise: [''],
    typeFormation:['',],
    demande: ['', [Validators.minLength(2), Validators.required]],

  });

  // Ajout d'un booléen pour vérifier si le formulaire est soumis
  submitted: boolean = false;

  // Déclaration du formbuilder dans le constructeur
  constructor(private formBuilder: FormBuilder,private demandeSpeService:DemandeSpeService,private elementRef: ElementRef<HTMLElement>) {}

  private addUser(): void {
    this.users.push(this.userForm.value);

    // test 
    this.demandeSpe = new DemandeSpe(
      this.userForm.value.typeFormation,
      this.userForm.value.demande,
      new DemandeSpeUser(
        this.userForm.value.nom,
        this.userForm.value.prenom,
        this.userForm.value.email,
        this.userForm.value.telephones,
        this.userForm.value.entreprise
      )
    )

    this.demandeSpeService.createDemandeSpe(this.demandeSpe).subscribe((userForm) => {this.demandeSpe = userForm});
    this.userForm.reset();
    this.submitted = false;
  }

  // Appel Service ? 
  public onSubmit(): void {
    this.submitted = true
    if (this.userForm.valid) {
      this.addUser();
      this.openPopup();
    }
  }
  public get form() {
    return this.userForm.controls;
  }


  // POUR LE POP UP WINDOW

  
  //open pop up window
  public openPopup() {
    // Get  variable by element id
  
  const popup = document.getElementById('popup');
  if (popup !== null) {
    popup.classList.add("open-popup");
  }

  }

  // Close pop up window
  public closePopup() {
  
    const popup = document.getElementById('popup');
  if (popup !== null) {
    popup.classList.remove("open-popup");
  }

  }
  
  
}

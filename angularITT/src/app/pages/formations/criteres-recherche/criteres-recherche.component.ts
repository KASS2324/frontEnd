import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormationService } from '../../../services/formation.service';

@Component({
  selector: 'app-criteres-recherche',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './criteres-recherche.component.html',
  styleUrl: './criteres-recherche.component.css'
})
export class CriteresRechercheComponent {

  @Output()
  onSelection: EventEmitter<any> = new EventEmitter();

  selectionForm: FormGroup = this.formBuilder.group({
    theme: ['Tous'],
    ville: ['Toutes']
  });

  // Ajout d'un booléen pour vérifier si le formulaire est soumis
  submitted: boolean = false;

  themes: String[] = [];

  constructor(private formBuilder: FormBuilder, private formationService: FormationService){}

  public onSubmit(): void {
    this.submitted = true;
    this.onSelection.emit(this.selectionForm.value);
  }

  ngOnInit(): void {
    this.formationService.getThemesFormations().subscribe((themes) => { this.themes = themes });
  }

  public get form() {
    return this.selectionForm.controls;
  }
}

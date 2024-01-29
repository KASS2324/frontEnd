import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ThemeService } from '../../../services/theme.service';
import Theme from '../../../models/theme.model';

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

  themes: Theme[] = [];

  constructor(private formBuilder: FormBuilder, private themeService: ThemeService){}

  public onSubmit(): void {
    this.submitted = true;
    this.onSelection.emit(this.selectionForm.value);
  }

  ngOnInit(): void {
    this.themeService.getThemes().subscribe((themes) => { this.themes = themes });
  }

  public get form() {
    return this.selectionForm.controls;
  }
}

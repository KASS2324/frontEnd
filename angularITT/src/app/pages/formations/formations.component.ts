import { Component } from '@angular/core';
import Formation from '../../models/formation.model';
import { FormationService } from '../../services/formation.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CriteresRechercheComponent } from "./criteres-recherche/criteres-recherche.component";
import { ResultatsRechercheComponent } from "./resultats-recherche/resultats-recherche.component";

@Component({
    selector: 'app-formations',
    standalone: true,
    templateUrl: './formations.component.html',
    styleUrl: './formations.component.css',
    imports: [ReactiveFormsModule, CriteresRechercheComponent, ResultatsRechercheComponent]
})
export class FormationsComponent {

  formations: Formation[] = [];

  constructor(private formationService: FormationService){}

  ngOnInit(): void {
    this.formationService.getFormations().subscribe((formations) => { this.formations = formations });
  }

  selection(selectionValue: any){
    const theme = selectionValue.theme;
    console.log("theme : "+theme);
    const ville = selectionValue.ville;
    console.log("ville : "+ville);
    // if(ville != "Toutes"){
    //   this.formationService.getFormationsByVille(ville).subscribe((formations) => { this.formations = formations });
    // }else{
    //   this.formationService.getFormations().subscribe((formations) => { this.formations = formations });
    // }
    // if(theme != "Tous"){
    //   this.formationService.getFormationsByTheme(theme).subscribe((formations) => { this.formations = formations });
    // }else{
    //   this.formationService.getFormations().subscribe((formations) => { this.formations = formations });
    // }
    if(theme === "Tous"){
      if(ville != "Toutes"){
        this.formationService.getFormationsByVille(ville).subscribe((formations) => { this.formations = formations });
      }else{
        this.formationService.getFormations().subscribe((formations) => { this.formations = formations });
      }
    } else {
      if(ville != "Toutes"){
        this.formationService.getFormationsByThemeAndVille(theme, ville).subscribe((formations) => { this.formations = formations });
      }else{
        this.formationService.getFormationsByTheme(theme).subscribe((formations) => { this.formations = formations });
      }
    }
  }
}

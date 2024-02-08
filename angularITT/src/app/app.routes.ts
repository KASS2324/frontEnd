import { Routes } from '@angular/router';
import { FormationsComponent } from './pages/formations/formations.component';
import { HomepageComponent } from './pages/homepage/homepage.component';

import { PageDemandeFormationSpeComponent } from './pages/page-demande-formation-spe/page-demande-formation-spe.component';
import { CatalogueComponent } from './pages/catalogue/catalogue.component';
import { NotFoundComponent } from './commons/not-found/not-found.component';
import { AdminAjoutFormationComponent } from './pages/admin-ajout-formation/admin-ajout-formation.component';


export const routes: Routes = [
    {path:'', redirectTo:'home', pathMatch: 'full'},
    { path: 'home', component: HomepageComponent},
    { path: 'formations', component: FormationsComponent},
    { path: 'demande-formation-spe', component:PageDemandeFormationSpeComponent},
    { path: 'formations', component: FormationsComponent},
    { path: 'demande-formation-spe', component:PageDemandeFormationSpeComponent},
    { path: 'catalogue', component:CatalogueComponent},
    { path: 'adminAjoutFormation', component:AdminAjoutFormationComponent},
    {path:'**',component:NotFoundComponent}, // Déclaré à la fin
];

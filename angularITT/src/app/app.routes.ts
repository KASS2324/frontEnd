import { Routes } from '@angular/router';
import { FormationsComponent } from './pages/formations/formations.component';
import { HomepageComponent } from './pages/homepage/homepage.component';

import { PageDemandeFormationSpeComponent } from './pages/page-demande-formation-spe/page-demande-formation-spe.component';
import { CatalogueComponent } from './pages/catalogue/catalogue.component';
import { NotFoundComponent } from './commons/not-found/not-found.component';
import { AdminCreerFormationComponent } from './pages/admin-creer-formation/admin-creer-formation.component';
import { AdminCreationCategorieComponent } from './pages/admin-creation-categorie/admin-creation-categorie.component';
import { AdminMenuComponent } from './pages/admin-menu/admin-menu.component';


export const routes: Routes = [
    {path:'', redirectTo:'home', pathMatch: 'full'},
    { path: 'home', component: HomepageComponent},
    { path: 'formations', component: FormationsComponent},
    { path: 'demande-formation-spe', component:PageDemandeFormationSpeComponent},
    { path: 'formations', component: FormationsComponent},
    { path: 'demande-formation-spe', component:PageDemandeFormationSpeComponent},
    { path: 'catalogue', component:CatalogueComponent},
    { path: 'adminCreerFormation', component:AdminCreerFormationComponent},
    { path: 'adminMenu', component:AdminMenuComponent},
    { path: 'adminCreationCategorie', component:AdminCreationCategorieComponent},
    {path:'**',component:NotFoundComponent}, // Déclaré à la fin
];

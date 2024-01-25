import { Routes } from '@angular/router';
import { FormationsComponent } from './pages/formations/formations.component';
import { HomepageComponent } from './pages/homepage/homepage.component';

export const routes: Routes = [
    {path:'', redirectTo:'home', pathMatch: 'full'},
    { path: 'home', component: HomepageComponent},
    { path: 'formations', component: FormationsComponent}
];

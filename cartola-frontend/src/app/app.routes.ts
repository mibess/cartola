import { DashboadComponent } from './dashboad/dashboad.component';
import { Routes } from '@angular/router';
import { EquipeComponent } from './pages/equipe/equipe.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboadComponent },
  { path: 'equipes', component: EquipeComponent },
  { path: '**', redirectTo: 'dashboard' }
];

import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home.component';
import { UsersComponent } from './pages/users.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UsersComponent },
];

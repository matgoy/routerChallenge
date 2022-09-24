import { Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { UserProfilComponent } from './user-profil/user-profil.component';
import { SignupComponent } from './signup/signup.component';

const ROUTES: Routes = [
    { path: 'menu', component: MenuComponent },
    { path: 'user-profil', component: UserProfilComponent },
    { path: 'signup', component: SignupComponent },
    { path: '', redirectTo: 'user-profil', pathMatch: 'full' }
];

export { ROUTES };
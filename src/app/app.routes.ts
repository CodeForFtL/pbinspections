import {RouterModule, Routes} from '@angular/router';

import {LoginComponent} from './views/login/login.component';
import {AuthGuardService} from './services/auth-guard.service';
import {InspectionsListComponent} from './views/inspections/inspections-list/inspections-list.component';
import {InspectionsFormComponent} from './views/inspections/inspections-form/inspections-form.component';
import {SideNavComponent} from './views/side-nav/side-nav.component';

const appRoutes: Routes = [{
  path: 'login',
  component: LoginComponent
}, {
  path: '',
  component: SideNavComponent,
  canActivate: [AuthGuardService],
  children: [
    {path: '', redirectTo: 'inspections', pathMatch: 'full'},
    {path: 'inspections', component: InspectionsListComponent},
    {path: 'inspections/add', component: InspectionsFormComponent},
    {path: 'inspections/edit/:id', component: InspectionsFormComponent}
  ]
}];

export const AppRoutes = RouterModule.forRoot(appRoutes);

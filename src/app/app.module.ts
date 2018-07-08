import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AuthGuardService} from './services/auth-guard.service';
import {AuthService} from './services/auth.service';
import {AppRoutes} from './app.routes';
import {FormsModule} from '@angular/forms';
import {environment} from '../environments/environment';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {LoginComponent} from './views/login/login.component';
import {DashboardComponent} from './views/dashboard/dashboard.component';
import {InspectionsListComponent} from './views/inspections/inspections-list/inspections-list.component';
import {InspectionsFormComponent} from './views/inspections/inspections-form/inspections-form.component';
import {InspectionsService} from './services/inspections.service';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SideNavComponent } from './views/side-nav/side-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatFormFieldModule,
  MatInputModule, MatDatepickerModule, MatNativeDateModule
} from '@angular/material';
import { ErrorsComponent } from './shared/components/field-errors/errors.component';
import { FireTimestampDatePipe } from './shared/pipes/fire-timestamp-date.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    InspectionsListComponent,
    InspectionsFormComponent,
    SideNavComponent,
    ErrorsComponent,
    FireTimestampDatePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    AppRoutes,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [AuthService, AuthGuardService, InspectionsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatChipsModule } from '@angular/material/chips';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { AppComponent } from './app.component';
import { UrlItemComponent } from './url-item/url-item.component';

import { UrlService } from "./services/url.service";
import { AuthComponent } from './auth/auth.component';
import { UrlViewComponent } from './url-view/url-view.component';

import { Routes, RouterModule } from '@angular/router';
import { AuthService } from './services/auth.service';
import { SingleUrlComponent } from './single-url/single-url.component';
import { FourOFourComponent } from './four-o-four/four-o-four.component';
import { AuthGuard } from './services/auth-guard.service';
import { EditUrlComponent } from './edit-url/edit-url.component';

const appRoutes: Routes = [
  { path: 'urls', canActivate: [AuthGuard], component: UrlViewComponent },
  { path: 'urls/:id', canActivate: [AuthGuard], component: SingleUrlComponent },
  { path: 'edit', canActivate: [AuthGuard], component: EditUrlComponent },
  { path: 'auth', component: AuthComponent },
  { path: '', component: UrlViewComponent },
  { path: '404', component: FourOFourComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  declarations: [
    AppComponent,
    UrlItemComponent,
    AuthComponent,
    UrlViewComponent,
    SingleUrlComponent,
    FourOFourComponent,
    EditUrlComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatIconModule,
    LayoutModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    BrowserAnimationsModule,
    MatChipsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    UrlService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

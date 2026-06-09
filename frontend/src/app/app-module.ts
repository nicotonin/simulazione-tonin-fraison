import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { AppComponent } from './app.component';
import { authInterceptor } from '../utils/auth.interceptor';
import { logoutInterceptor } from '../utils/logout.interceptor';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavUserComponent } from './components/nav-user/nav-user.component';
import { IfAuthenticatedDirective } from '../utils/if-authenticated.directive';
import { FilmComponent } from './pages/film/film.component';
import { FilmDetailComponent } from './pages/film/film-detail.component';
import { CategoryComponent } from './pages/category/category.component';
import { CategoryDetailComponent } from './pages/category/category-detail.component';


@NgModule({
  declarations: [
    CategoryComponent,
    CategoryDetailComponent,
    FilmComponent,
    FilmDetailComponent,
    App,
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NavbarComponent,
    NavUserComponent,
    IfAuthenticatedDirective,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
  ],
 providers: [
    provideHttpClient(
      withInterceptors([authInterceptor, logoutInterceptor])
    )
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

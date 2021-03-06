import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import {HeaderComponent} from './header/header.component';
import {BodyComponent} from './body/body.component';
import {FooterComponent} from './footer/footer.component';
import {BodyLoginComponent} from './body-login/body-login.component';
import {BodyWelcomeComponent} from './body-welcome/body-welcome.component';
import {BodyMoviesComponent} from './body-movies/body-movies.component';
import {BodyNavComponent} from './body-nav/body-nav.component';

@NgModule({
  declarations: [AppComponent,HeaderComponent,BodyComponent,FooterComponent,BodyLoginComponent,BodyWelcomeComponent,BodyMoviesComponent,BodyNavComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

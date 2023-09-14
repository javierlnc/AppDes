import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule }   from '@angular/forms'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NavbarComponent } from './componets/navbar/navbar.component';
import { TiquetesComponent } from './componets/tiquetes/tiquetes.component';
import { EnviosComponent } from './componets/envios/envios.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TiquetesComponent,
    EnviosComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

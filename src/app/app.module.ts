import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { HotelComponent } from './hotel/hotel.component';
import { HotelEditComponent } from './hotel-edit/hotel-edit.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { HotelAddComponent } from './hotel-add/hotel-add.component';
import { AireportComponent } from './aireport/aireport.component';
import { AireportAddComponent } from './aireport-add/aireport-add.component';
import { AireportEditComponent } from './aireport-edit/aireport-edit.component';
import {PartenaireAddComponent} from "./partenaire-add/partenaire-add.component";
import {PartenaireComponent} from "./partenaire/partenaire.component";
import {PartenaireEditComponent} from "./partenaire-edit/partenaire-edit.component";
import {VoitureeComponent} from "./voiture/voituree.component";
import {VoitureeEditComponent} from "./voituree-edit/voituree-edit.component";
import {VoitureeAddComponent} from "./voituree-add/voituree-add.component";
import {OffreComponent} from "./offre/offre.component";
import {OffreEditComponent} from "./offre-edit/offre-edit.component";

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    HotelComponent,
    HotelEditComponent,
    HotelAddComponent,
    AireportComponent,
    AireportAddComponent,
    AireportEditComponent,
    PartenaireAddComponent,
    PartenaireComponent,
    PartenaireEditComponent,
    VoitureeComponent,
    VoitureeEditComponent,
    VoitureeAddComponent,
    OffreComponent,
    OffreEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

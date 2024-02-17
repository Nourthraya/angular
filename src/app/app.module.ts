import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { ResidencesComponentComponent } from './residences-component/residences-component.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { DetailsProductComponent } from './details-product/details-product.component';

//configuration taa module: 

@NgModule({
  //partie declaration fiha les composants mtaa le module
  //si tu ajoute a component tal9ah ghadi f declaration
  declarations: [
    AppComponent,
    ProductComponent,
    HomeComponent,
    ResidencesComponentComponent,
    NotfoundComponent,
    DetailsProductComponent
  ],
  // import des modules nest7a9ouhom, exemple: formulaire : tu importe reacrformsmodule bech tnajem tekhdem bih
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [], //pour la partie service

  bootstrap: [AppComponent] // pour le composant racine/ de pointage (bech yetlanca louleni)
})
export class AppModule { }

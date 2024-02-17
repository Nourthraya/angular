import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResidencesComponentComponent } from './residences-component/residences-component.component';
import { ProductComponent } from './product/product.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { DetailsProductComponent } from './details-product/details-product.component';

const routes: Routes = [
{path:'Home',component:HomeComponent},
{path:'Product',component:ProductComponent},
{path:'Residence',component:ResidencesComponentComponent},
{path:'',redirectTo:'/Home',pathMatch:'full'},
{path:'product/:id',component:DetailsProductComponent},
{path:'**',component:NotfoundComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

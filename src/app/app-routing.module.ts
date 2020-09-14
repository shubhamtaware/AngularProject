import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { BakeryComponent } from './components/bakery/bakery.component';
import { ConfectionaryComponent} from './components/confectionary/confectionary.component';
import { PastaComponent } from './components/pasta/pasta.component';
import { ReadytocookComponent } from './components/readytocook/readytocook.component';
import { SauceComponent } from './components/sauce/sauce.component';
import { SoupComponent } from './components/soup/soup.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes=[
    {path:'', redirectTo:'/shop', pathMatch:'full'},
    {path:'shop', component: ShoppingCartComponent},
    {path:'bakery', component: BakeryComponent},
    {path:'confectionary', component: ConfectionaryComponent},
    {path:'pasta', component: PastaComponent},
    {path:'readytocook', component: ReadytocookComponent},
    {path:'sauce', component: SauceComponent},
    {path:'soup', component: SoupComponent},
    {path:'signup', component: SignupComponent},
    {path:'login', component: LoginComponent}
]
@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule{

}
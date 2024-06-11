import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './component/landing/landing.component';
import { DestaqueComponent } from './component/destaque/destaque.component';
import { HomeComponent } from './components/home/home.component';
import { PaginaProdutosComponent } from './components/pagina-produtos/pagina-produtos.component';
import { ColecoesComponent } from './component/colecoes/colecoes.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
<<<<<<< HEAD
    {path:'produtos', component:PaginaProdutosComponent},
    {path:'colecoes', component:ColecoesComponent}
=======
    {path:'produtos', component:PaginaProdutosComponent}
>>>>>>> ff915250791f75df064cfed0f7de13a0bfe00f90

];

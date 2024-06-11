import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './component/landing/landing.component';
import { DestaqueComponent } from './component/destaque/destaque.component';
import { HomeComponent } from './components/home/home.component';
import { PaginaProdutosComponent } from './components/pagina-produtos/pagina-produtos.component';
import { ColecoesComponent } from './component/colecoes/colecoes.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'produtos', component:PaginaProdutosComponent},
    {path:'colecoes', component:ColecoesComponent}

];

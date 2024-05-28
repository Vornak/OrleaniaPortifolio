import { Component } from '@angular/core';
import { LandingComponent } from "../../component/landing/landing.component";
import { DestaqueComponent } from "../../component/destaque/destaque.component";
import { ColecoesComponent } from "../../component/colecoes/colecoes.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [LandingComponent, DestaqueComponent, ColecoesComponent]
})
export class HomeComponent {

}

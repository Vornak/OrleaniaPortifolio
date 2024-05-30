import { Component } from '@angular/core';
import { LandingComponent } from "../../component/landing/landing.component";
import { DestaqueComponent } from "../../component/destaque/destaque.component";
import { ColecoesComponent } from "../../component/colecoes/colecoes.component";
import { AboutComponent } from "../../component/about/about.component";
import { DescontoComponent } from "../../component/desconto/desconto.component";
import { FooterComponent } from "../../component/footer/footer.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [LandingComponent, DestaqueComponent, ColecoesComponent, AboutComponent, DescontoComponent, FooterComponent]
})
export class HomeComponent {

}

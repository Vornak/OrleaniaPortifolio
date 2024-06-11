import { Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { Produtos } from '../../interfaces/Produto';
import { LayoutModule } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "../../component/footer/footer.component";


@Component({
    selector: 'app-pagina-produtos',
    standalone: true,
    templateUrl: './pagina-produtos.component.html',
    styleUrl: './pagina-produtos.component.scss',
    imports: [RouterModule, CommonModule, FooterComponent]
})
export class PaginaProdutosComponent {

  produtos:Produtos[] = [
    {nome:'nomeQualquer', foto:'assets/produtos/20240530_141652.jpg', preco:'R$59'},
    {nome:'nomeQualquer', foto:'assets/produtos/20240530_141600.jpg', preco:'R$59'},
    {nome:'nomeQualquer', foto:'assets/produtos/20240530_142041.jpg', preco:'R$59'}
  ]


}

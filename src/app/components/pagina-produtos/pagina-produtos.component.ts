import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { Produtos } from '../../interfaces/Produto';
import { LayoutModule } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "../../component/footer/footer.component";
import { Menu, MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';


@Component({
    selector: 'app-pagina-produtos',
    standalone: true,
    templateUrl: './pagina-produtos.component.html',
    styleUrl: './pagina-produtos.component.scss',
    imports: [RouterModule, CommonModule, FooterComponent, MenuModule, ButtonModule]
})
export class PaginaProdutosComponent implements OnInit {
  produtoLink:string = 'produto'
  produtos:Produtos[] = [
    {nome:'nomeQualquer', foto:'assets/produtos/produto1.jpg', preco:'R$59'},
    {nome:'nomeQualquer', foto:'assets/produtos/produto4.jpg', preco:'R$59'},
    {nome:'nomeQualquer', foto:'assets/produtos/produto3.jpg', preco:'R$59'}
  ]

  items: MenuItem[] | undefined;

  ngOnInit(): void {

    // for(let i=1;i<7;i++){
    //   this.produtoLink = 'produto'+i
    //   this.produtos
    //   console.log(this.produtoLink)
    // }
  }
 





}

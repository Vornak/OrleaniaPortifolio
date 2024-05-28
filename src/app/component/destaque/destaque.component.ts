import { Component, OnInit } from '@angular/core';
import { Destaque } from '../../interfaces/Destaque';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-destaque',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './destaque.component.html',
  styleUrl: './destaque.component.scss'
})
export class DestaqueComponent implements OnInit{
  destaque!:Destaque
  constructor(){
    this.destaque = {width:"400px", height:"300px"}


}  
ngOnInit(): void {
    throw new Error('Method not implemented.');
}
}


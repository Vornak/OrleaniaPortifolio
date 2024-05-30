import { Component, ViewChild } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule, MatMenuTrigger} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    MatSidenavModule, 
    MatFormFieldModule, 
    MatSelectModule,
    MatButtonModule, 
    MatMenuModule, 
    MatIconModule,
    MatSlideToggleModule,
    RouterModule
  ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {

  produtos:string = '/produtos'


}

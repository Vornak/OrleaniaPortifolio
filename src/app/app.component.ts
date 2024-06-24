import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DestaqueComponent } from "./component/destaque/destaque.component";
import { LayoutModule } from '@angular/cdk/layout';
import { MenuModule } from 'primeng/menu';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, DestaqueComponent, LayoutModule]
})
export class AppComponent {
  title = 'OrleaniaPortifolio';
}

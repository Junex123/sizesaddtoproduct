import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductformComponent } from './productform/productform.component';
import { AddproductComponent } from './addproduct/addproduct.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ProductformComponent,AddproductComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sizestoproduct';
}

import { Routes } from '@angular/router';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ProductformComponent } from './productform/productform.component';

export const routes: Routes = [

    {path:'addproduct',component:AddproductComponent},
    {path:'productform',component:ProductformComponent}
];

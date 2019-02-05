import { FoodComponent } from './../food/food.component';
import { NavbarComponent } from './../navbar/navbar.component';
import { FooterComponent } from './../footer/footer.component';
import { DashboardComponent } from './../dashboard/dashboard.component';
import { ButtonComponent } from './../button/button.component';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SideComponent } from '../side/side.component';
import { LoginComponent } from '../login/login.component';
const route:Routes=[{
  path: '',
  redirectTo:'home',
  pathMatch:'full'
},{
  path:'home',
  component:HomeComponent,
  children:[{
    path:'',
    redirectTo:'dashboard',
    component:DashboardComponent,
  },
  {
    path:'dashboard',
    component:DashboardComponent,
  },
  {
    path:'food',
    component:FoodComponent,
  }
]
},
{
  path:'dashboard',
  component:DashboardComponent
},
  {
  path:'**',
  component:DashboardComponent,
  } 


/* {
path:'button',
component:ButtonComponent,
},
{
path:'dashboard',
component:DashboardComponent,
} */
]
@NgModule({
  declarations: [
    HomeComponent,
    SideComponent,
    NavbarComponent,
    FooterComponent,
    DashboardComponent,
    FoodComponent,
    ],
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ],
  exports:[RouterModule]
})
export class HomeModule { }

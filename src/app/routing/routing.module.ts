import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HerosComponent} from './heroes/heroes.component';
import { RouterModule } from '@angular/router';
const routes:Routes=[
  {path:'heores',component:HerosComponent}
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class RoutingModule { }
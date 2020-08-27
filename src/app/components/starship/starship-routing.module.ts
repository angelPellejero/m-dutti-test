import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StarShipListComponent } from './star-ship-list/star-ship-list.component';
import { StarshipComponent } from './starship.component';


const routes: Routes = [
  {
    path: 'starships',
    component: StarshipComponent,
    children: [
      { path: '', component: StarShipListComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StarshipRoutingModule { }

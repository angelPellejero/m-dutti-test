import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'starships', pathMatch: 'full' },
  { path: '**', redirectTo: 'starships', pathMatch: 'full'},
  { path: 'starships', loadChildren: './components/starship/starship.module#StarshipModule' },
  { path: 'starships', loadChildren: './components/secret/secret.module#SecretModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

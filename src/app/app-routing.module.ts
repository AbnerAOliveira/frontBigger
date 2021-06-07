import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
const routes: Routes = [
	{
		path: '',
		component: HomeComponent

	},
	{
		path:'google',
		loadChildren: () => 
			import('@google/google.module').then((m) => m.GoogleModule),
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

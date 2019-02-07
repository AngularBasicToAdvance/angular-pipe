import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InbuilPipeComponent } from './inbuil-pipe/inbuil-pipe.component';
import { CustomePipeComponent } from './custome-pipe/custome-pipe.component';

const routes: Routes = [
  {path: 'inbuildpipe', component: InbuilPipeComponent},
  {path: 'customepipe', component: CustomePipeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

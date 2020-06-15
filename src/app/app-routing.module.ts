import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled', useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

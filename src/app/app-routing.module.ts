import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookMovieComponent } from './bookmovie/bookmovie.component';
import { CancelTicketComponent } from './cancel-ticket/cancel-ticket.component';

const routes: Routes = [
  {path:'',redirectTo:'/bookmovie',pathMatch:'full'},
  {path:'app-bookmovie', component:BookMovieComponent},
  {path:'Cancel-ticket',component:CancelTicketComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

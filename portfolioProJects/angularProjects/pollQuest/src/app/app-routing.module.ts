import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// app.module.ts
import { PollListComponent } from './poll-list/poll-list.component'; // Update the path if needed
import { PollDetailComponent } from './poll-detail/poll-detail.component'; // Update the path if needed


const routes: Routes = [
  { path: '', component: PollListComponent },
  { path: 'poll/:id', component: PollDetailComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



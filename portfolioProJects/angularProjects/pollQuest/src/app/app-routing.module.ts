import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { PollListComponent } from './poll-list/poll-list.component';
import { PollDetailComponent } from './poll-detail/poll-detail.component';
import { HomeComponent } from './home/home.component';
import { PollsComponent } from './polls/polls.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { 
    path: 'polls',
    component: PollsComponent,
    children: [
      { path: 'poll/:id', component: PollDetailComponent },
    ],
  },
  // { path: 'poll/:id', component: PollDetailComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



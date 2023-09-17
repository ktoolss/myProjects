import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PollDetailComponent } from './poll-detail/poll-detail.component';
import { HomeComponent } from './home/home.component';
import { CreatePollComponent } from './create-poll/create-poll.component';
import { PollsComponent } from './polls/polls.component';
import { GeneralPollListComponent } from './general-poll-list/general-poll-list.component';
import { IndustryPollListComponent } from './industry-poll-list/industry-poll-list.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { 
    path: 'polls',
    component: PollsComponent,
    children: [
      { path: 'general', component: GeneralPollListComponent },
      { path: 'industry', component: IndustryPollListComponent },
      { path: 'poll/:id', component: PollDetailComponent },
    ],
  },
  { path: 'create-poll', component: CreatePollComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

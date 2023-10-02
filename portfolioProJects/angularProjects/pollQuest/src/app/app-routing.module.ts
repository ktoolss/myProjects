import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PollDetailComponent } from './poll-detail/poll-detail.component';
import { HomeComponent } from './home/home.component';
import { CreatePollComponent } from './create-poll/create-poll.component';
import { PollsComponent } from './polls/polls.component';
import { GeneralPollListComponent } from './general-poll-list/general-poll-list.component';
import { IndustryPollListComponent } from './industry-poll-list/industry-poll-list.component';
import { NationalPollListComponent } from './national-poll-list/national-poll-list.component';
import { StatePollListComponent } from './state-poll-list/state-poll-list.component';
import { LocalPollListComponent } from './local-poll-list/local-poll-list.component';
import { PoliticsPollListComponent } from './politics-poll-list/politics-poll-list.component';
import { MusicPollListComponent } from './music-poll-list/music-poll-list.component';
import { TelevisionPollListComponent } from './television-poll-list/television-poll-list.component';
import { MarketingPollListComponent } from './marketing-poll-list/marketing-poll-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { 
    path: 'polls',
    component: PollsComponent,
    children: [
      { path: 'general', component: GeneralPollListComponent },
      { path: 'industry', component: IndustryPollListComponent },
      { path: 'national', component: NationalPollListComponent },
      { path: 'state', component: StatePollListComponent },
      { path: 'local', component: LocalPollListComponent },
      { path: 'politics', component: PoliticsPollListComponent },
      { path: 'music', component: MusicPollListComponent },
      { path: 'television', component: TelevisionPollListComponent },
      { path: 'marketing', component: MarketingPollListComponent },
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

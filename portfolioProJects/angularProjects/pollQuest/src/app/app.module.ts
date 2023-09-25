import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PollComponent } from './poll/poll.component';

import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PollListComponent } from './poll-list/poll-list.component';
import { PollDetailComponent } from './poll-detail/poll-detail.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PollListDropdownComponent } from './poll-list-dropdown/poll-list-dropdown.component';
import { HomeComponent } from './home/home.component';
import { PollsComponent } from './polls/polls.component';
import { CreatePollComponent } from './create-poll/create-poll.component';
import { PollsService } from './polls.service';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { GeneralPollListComponent } from './general-poll-list/general-poll-list.component';
import { IndustryPollListComponent } from './industry-poll-list/industry-poll-list.component';
import { NationalPollListComponent } from './national-poll-list/national-poll-list.component';
import { StatePollListComponent } from './state-poll-list/state-poll-list.component';
import { LocalPollListComponent } from './local-poll-list/local-poll-list.component';
import { PoliticsPollListComponent } from './politics-poll-list/politics-poll-list.component';
import { MusicPollListComponent } from './music-poll-list/music-poll-list.component';
import { TelevisionPollListComponent } from './television-poll-list/television-poll-list.component';
import { MarketingPollListComponent } from './marketing-poll-list/marketing-poll-list.component';


@NgModule({
  declarations: [
    AppComponent,
    PollComponent,
    PollListComponent,
    PollDetailComponent,
    HeaderComponent,
    PollListDropdownComponent,
    HomeComponent,
    PollsComponent,
    CreatePollComponent,
    GeneralPollListComponent,
    IndustryPollListComponent,
    NationalPollListComponent,
    StatePollListComponent,
    LocalPollListComponent,
    PoliticsPollListComponent,
    MusicPollListComponent,
    TelevisionPollListComponent,
    MarketingPollListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatRadioModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([]),
    FormsModule
  ],
  providers: [PollsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

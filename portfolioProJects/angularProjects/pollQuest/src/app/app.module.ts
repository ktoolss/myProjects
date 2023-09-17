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


@NgModule({
  declarations: [
    AppComponent,
    PollComponent,
    PollListComponent,
    PollDetailComponent,
    HeaderComponent,
    PollListDropdownComponent,
    HomeComponent,
    PollsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([]),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

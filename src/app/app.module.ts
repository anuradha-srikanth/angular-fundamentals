import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventsListComponent } from './events/list/events-list.component';
import { EventComponent } from './events/event/event.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EventService } from './events/shared/event.service';

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    EventService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

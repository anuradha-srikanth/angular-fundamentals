import { Component } from '@angular/core';
import { EventComponent } from '../event/event.component';
import { EventService } from '../shared/event.service'


@Component({
    selector: 'events-list-component',
    templateUrl: './events-list.component.html',
    styleUrls: ['./events-list.component.css']
})

export class EventsListComponent {
    // events = allEvents;
    // EventSer
    private eventService;
    private events;
    constructor(eventService: EventService){
        this.eventService = eventService;
    }

    // str = "DISPLAY";
    // event = new EventComponent(this.e.name, this.e.date, this.e.time, this.e.address);

}
// constructor(name: any, date: String, time: String, address:String, city: String, state: String, country: String) {
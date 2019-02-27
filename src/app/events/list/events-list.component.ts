import { Component, OnInit } from '@angular/core';
import { EventComponent } from '../event/event.component';
import { EventService } from '../shared/event.service'
declare let toastr;

@Component({
    selector: 'events-list-component',
    templateUrl: './events-list.component.html',
    styleUrls: ['./events-list.component.css']
})

export class EventsListComponent implements OnInit{
    // events = allEvents;
    // EventSer
    private eventService;
    private events;
    constructor(eventService: EventService){
        this.eventService = eventService;
    }

    ngOnInit() {
        this.events = this.eventService.getEvents();
    }

}

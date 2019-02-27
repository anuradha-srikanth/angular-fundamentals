import { Component } from '@angular/core';
import { EventComponent } from './event.component';



@Component({
    selector: 'events-list-component',
    templateUrl: './events.component.html',
    styleUrls: ['./events.component.css']
})

export class EventsListComponent {
    e = {
        name:'ngConf 2025',
        date: '3/1/2025', 
        time: '8am', 
        location: {
            address: '123 Main St', 
            city: 'Salt Lake City, UT',
            country: 'USA'
        }
    }

    str = "DISPLAY";
    // event = new EventComponent("ANu");

}
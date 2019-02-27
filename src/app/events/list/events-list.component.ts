import { Component } from '@angular/core';
import { EventComponent } from '../event/event.component';



@Component({
    selector: 'events-list-component',
    templateUrl: './events-list.component.html',
    styleUrls: ['./events-list.component.css']
})

export class EventsListComponent {
    events = [
        {
        name:'ngConf 2025',
        date: '3/1/2025', 
        time: '8am', 
        address: '123 Main St'
        },
        {
            name:'ngConf 2025',
            date: '3/1/2025', 
            time: '8am', 
            address: '123 Main St'
        },
        {
            name:'ngConf 2025',
            date: '3/1/2025', 
            time: '8am', 
            address: '123 Main St'
        }
]

    // str = "DISPLAY";
    // event = new EventComponent(this.e.name, this.e.date, this.e.time, this.e.address);

}
// constructor(name: any, date: String, time: String, address:String, city: String, state: String, country: String) {
import { Component, Input } from '@angular/core';

@Component({
    selector: 'event-component',
    templateUrl: './event.component.html',
    styleUrls: ['./event.component.css']
})


export class EventComponent {

    // name: any;
    // date: String;
    // time: String;
    // address: String;

    // constructor (name: String, date: String, time: String, address: String) {
    //     this.name = name;
    //     this.date = date;
    //     this.time = time;
    //     this.address = address;
    // }

    @Input() event: any;

}


// class Location {
//     address: String;
//     city: String;
//     state: String;
//     country: String;
// }
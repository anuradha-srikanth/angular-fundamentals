import { Component, Input } from '@angular/core';

@Component({
    selector: 'event-component',
    templateUrl: './event.component.html',
    styleUrls: ['./event.component.css']
})

// class Location {
//     address: String;
//     city: String;
//     state: String;
//     country: String;
// }


export class EventComponent {
    @Input() eventDetail:any;

    // name: any;
    // date: Date;
    // time: String;
    // location: Location;

    // @Input() extra: any;

    // constructor(name: any){
        //date: Date, time: String, address:String, city: String, state: String, country: String) {
        // this.name = name;
        // this.date = date;
        // this.time = time;
        // this.location.address = address;
        // this.location.city = city;
        // this.location.state = state;
        // this.location.country = country;
    // }

    

}
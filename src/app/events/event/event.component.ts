import { Component, Input } from '@angular/core';
declare let toastr;

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

    getStartTimeClass(): string{
        if (this.event && this.event.time == '8:00 am'){
            return 'text-success'
        } else if(this.event && this.event.time == "10:00 am"){
            return 'text-warning';
        } else {
            return 'text-primary';
        }
    }

    handleClickEvent(): void {
        console.log(this.event.name);
        toastr.success(this.event.name);
    }

}


// class Location {
//     address: String;
//     city: String;
//     state: String;
//     country: String;
// }
import { Component, Input } from '@angular/core';

@Component({
    selector: 'navbar-component',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})


export class NavbarComponent {

    @Input() event: any;

}

import {allEvents} from './allEvents'
import { Injectable } from '@angular/core';

@Injectable()
export class EventService {
    getEvents(){
        return allEvents;
    }
}
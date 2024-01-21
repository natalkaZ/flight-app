import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Luggage } from './luggage';

@Injectable({
  providedIn: 'root'
})
export class LuggageService {

  load(): Observable<Luggage[]> {
    return of([
      {id: 1, weight: 4000, checkinId: true, remarks: 'black trolly'},
      {id: 2, weight: 7000, checkinId: true, remarks: 'blue trolly'},
      {id: 3, weight: 3000, checkinId: true, remarks: 'yellow trolly'}
    ])
  }


}

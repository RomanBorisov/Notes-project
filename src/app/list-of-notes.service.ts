import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListOfNotesService {


  notes = [
    {
      id: 1,
      tittle : 'First Note',
      noteText : 'First note text'
    },
    {
      id: 2,
      tittle : 'Second Note',
      noteText : 'Second note text'
    },
    {
      id: 3,
      tittle : 'Third Note',
      noteText : 'Third note text'
    },
    {
      id: 4,
      tittle : 'Third Note',
      noteText : 'Third note text'
    },
    {
      id: 5,
      tittle : 'Third Note',
      noteText : 'Third note text'
    },
    {
      id: 6,
      tittle : 'Third Note',
      noteText : 'Third note text'
    },


  ];

  getNotes(){
    return this.notes;
  }

  constructor() { }
}

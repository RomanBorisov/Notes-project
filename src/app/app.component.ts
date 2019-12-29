import { ListOfNotesService } from './list-of-notes.service';
import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  opened = true;
  notes = [];
  constructor(private listOfNotesService: ListOfNotesService) {}

  ngOnInit() {
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { ListOfNotesService } from '../list-of-notes.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() opened: boolean;
  notes = [];

  constructor(private listOfNotesService: ListOfNotesService) {}

  ngOnInit() {
    this.notes = this.listOfNotesService.getNotes();
  }

  show() {
    
  }

}

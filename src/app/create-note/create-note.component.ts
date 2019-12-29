import { Component, OnInit, HostListener  } from '@angular/core';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent implements OnInit {

  constructor() { }

  isOpenLargeCreatingBlock = false;
  isOpenSmallCreatingBlock = true;


  openLargeForm() {
    this.isOpenLargeCreatingBlock = true;
    this.isOpenSmallCreatingBlock = false;
  }

  closeLargeForm() {
    this.isOpenLargeCreatingBlock = false;
    this.isOpenSmallCreatingBlock = true;
  }

  ngOnInit() {
  }


}

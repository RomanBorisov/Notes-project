import { ListOfNotesService } from './../list-of-notes.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-text-nodes',
  templateUrl: './text-nodes.component.html',
  styleUrls: ['./text-nodes.component.scss']
})
export class TextNodesComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private listOfNotesService: ListOfNotesService
  ) { }

  @Input() note;

  openedTextNote:false;

  defaulColor = '#fff475';

  choosenColor: string;

  openedColorBoard = false;


  colors: string[] = ['white', 'blue', 'red', 'green', '#fff475'];

  openColorBoard() {
    this.openedColorBoard = !this.openedColorBoard;
  }

  changeColor(color) {
    this.defaulColor = color;
  }

  ngOnInit() {
  }

}

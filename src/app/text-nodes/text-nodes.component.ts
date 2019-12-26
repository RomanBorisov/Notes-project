import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-nodes',
  templateUrl: './text-nodes.component.html',
  styleUrls: ['./text-nodes.component.scss']
})
export class TextNodesComponent implements OnInit {

  constructor() { }

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

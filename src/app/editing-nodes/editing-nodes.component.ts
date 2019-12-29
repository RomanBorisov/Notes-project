import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editing-nodes',
  templateUrl: './editing-nodes.component.html',
  styleUrls: ['./editing-nodes.component.scss']
})
export class EditingNodesComponent implements OnInit {

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

import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
  animations:[trigger('ballFall',[
    state('falling', style({height:'100px',transform: 'translateY(23px)',fill:"blue" })),
    state('fallen',style({height:'200px' , fill:"green"})),
    transition('*=> falling',
      animate('12s'))
  ])]
})
export class BoardComponent implements OnInit {
   public isFalling = 'falling';

  constructor() { }


  ngOnInit() {

  }

}

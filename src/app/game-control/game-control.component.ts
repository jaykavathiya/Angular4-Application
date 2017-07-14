import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() incrementEmit = new EventEmitter<number>();
  increment: number = 0;
  startIncrement;

  constructor() { }

  ngOnInit() {
  }

  onStart(){
    this.startIncrement = setInterval(()=>{
      this.incrementEmit.emit(this.increment + 1);
      this.increment++;
    },1000);
  }

  onStop(){
    clearInterval(this.startIncrement);
  }
}

import { Component, OnInit } from '@angular/core';
import {count} from "rxjs/operator/count";

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  addNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = 'TestName';
  userName = 'Jay';
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2'];
  togglePara = true;
  count = 1;
  counterArray = [];

  constructor() {
    setTimeout(() => {
      this.addNewServer = true;
    },3000)
  }

  ngOnInit() {
  }

  onServerCreation(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    console.log(this.servers);
    this.serverCreationStatus = 'Sever has been created and the server name is:'+ " " + this.serverName;
  }

  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }
  clearUsername(){
    this.userName = '';
  }

  performAction(){
    this.togglePara = !this.togglePara;
    // this.counterArray.push(this.count++);
    this.counterArray.push(new Date());
  }

  giveColor(cnt){
    if(cnt >= 4){
      return {'backgroundColor':'blue'};
    }
  }
}

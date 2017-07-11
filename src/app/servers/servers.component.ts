import { Component, OnInit } from '@angular/core';

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

  constructor() {
    setTimeout(() => {
      this.addNewServer = true;
    },3000)
  }

  ngOnInit() {
  }

  onServerCreation(){
    this.serverCreated = true;
    this.serverCreationStatus = 'Sever has been created and the server name is:'+ " " + this.serverName;
  }

  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }
  clearUsername(){
    this.userName = '';
  }
}

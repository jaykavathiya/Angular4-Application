import { Component } from '@angular/core';

@Component  ({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type:'server',name: 'Test Server',content: 'This is just a simple test'}];
  evens: number[] = [];
  odds: number[] = [];

  onServerAdded(serverData:{serverName: string, serverContent: string}){
    this.serverElements.push({
      type:'server',
      name: serverData.serverName,
      content:serverData.serverContent
    });
  }
  onBlueprintAdded(BlueprintData:{serverName: string, serverContent: string}){
    this.serverElements.push({
      type:'blueprint',
      name: BlueprintData.serverName,
      content:BlueprintData.serverContent
    });
  }
  onFirstChange(){
    this.serverElements[0].name = 'Changed!';
  }
  onFirstDestroy(){
    this.serverElements.splice(0,1);
  }

  onStartIncrement(firedNumber : number){
    if(firedNumber % 2 === 0){
      this.evens.push(firedNumber);
    }
    else{
      this.odds.push(firedNumber);
    }
  }
}

import { Component } from '@angular/core';

@Component  ({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type:'server',name: 'TestServer',content: 'This is just a simple test'}];
}

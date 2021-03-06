import { Component } from '@angular/core';
import { Response } from '@angular/http';
import { ServerService } from './server.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  test = this.serverService.getTest();
  servers = [
    {
      name: 'Testserver',
      capacity: 10,
      id: this.generateId()
    },
    {
      name: 'Liveserver',
      capacity: 100,
      id: this.generateId()
    }
  ];
  
  constructor(private serverService: ServerService) {}
  
  onAddServer(name: string) {
    this.servers.push({
      name: name,
      capacity: 50,
      id: this.generateId()
    });
  }
  
  onSave() {
    this.serverService.storeServers(this.servers)
      .subscribe(
        (res) => console.log(res),
        (err) => console.log(err)
      );
  }
  
  onGet() {
    this.serverService.getServers()
      .subscribe(
        // (res: Response) => {
        //   const data = res.json();
        //   console.log(data);
        // },
        (data: any[]) => {
          // console.log(data); // servers
          this.servers = data;
        },
        (err) => console.log('ERR: ' + err)
      );
  }
  
  private generateId() {
    return Math.round(Math.random() * 10000);
  }
}

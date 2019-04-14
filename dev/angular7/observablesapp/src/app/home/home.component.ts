import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Observer } from 'rxjs/Observer';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // Custom Observable
    /*
    const myNums = Observable.interval(1000);
    myNums.subscribe(
      (num: number) => {
        console.log(num);
      }
    );
    */
    const myObservable = Observable.create((observer: Observer<string>) => {
      setTimeout(() => {
        observer.next('1st pkg');
      }, 2000);
      setTimeout(() => {
        observer.next('2nd pkg');
      }, 4000);
      setTimeout(() => {
        // observer.next('Not working');
        observer.complete();
      }, 5000);
      setTimeout(() => {
        observer.next('3rd pkg');
      }, 6000);
    });
    
    myObservable.subscribe(
      (data: string) => {console.log(data);},
      (err: string) => {console.log(err);},
      () => {console.log('Done!');}
    );
  }

}

import { 
  Component, OnInit, 
  Input, ViewEncapsulation, 
  OnChanges, SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild, ElementRef,
  ContentChild
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // None, Native
})
export class ServerElementComponent implements 
  OnInit, 
  OnChanges, 
  DoCheck, 
  AfterContentInit,
  AfterContentChecked,
  OnDestroy {
  @Input('srvElement') element: {
    type: string,
    name: string,
    content: string
  };
  @Input() name: string;
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentP') p: ElementRef;

  constructor() { 
    console.log('constructor get called');
  }
  
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges get called');
    // console.log(changes);
  }

  ngOnInit() {
    console.log('ngOnInit get called');
    console.log('T C: ' + this.header.nativeElement.textContent);
    console.log('p T: ' + this.p.nativeElement.textContent);
  }
  
  ngDoCheck() {
    console.log('ngDoCheck get called');
  }
  
  ngAfterContentInit() {
    console.log('ngAfterContentInit get called');
    console.log('p T: ' + this.p.nativeElement.textContent);
  }
  
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked get called');
  }
  
  ngAfterViewInit() {
    console.log('ngAfterViewInit get called');
    console.log('T C: ' + this.header.nativeElement.textContent);
  }
  
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked get called');
  }
  
  ngOnDestroy() {
    console.log('ngOnDestroy get called');
  }
}

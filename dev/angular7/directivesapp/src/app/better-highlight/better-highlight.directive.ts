import { Directive, OnInit, ElementRef, Renderer2, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';
  @Input('appBetterHighlight') highlightColor: string = 'lightblue';
  // @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';
  // @HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor;
  @HostBinding('style.backgroundColor') backgroundColor: string;
  
  constructor(private eleRef: ElementRef, private renderer: Renderer2) { }
  
  ngOnInit() {
    // this.renderer.setStyle(this.eleRef.nativeElement, 'backgroundColor', 'lightblue');
    this.backgroundColor = this.defaultColor;
  }
  
  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(this.eleRef.nativeElement, 'backgroundColor', 'lightblue');
    // this.backgroundColor = 'lightblue';
    this.backgroundColor = this.highlightColor;
  }
  
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.eleRef.nativeElement, 'backgroundColor', 'transparent');
    // this.backgroundColor = 'transparent';
    this.backgroundColor = this.defaultColor;
  }
}

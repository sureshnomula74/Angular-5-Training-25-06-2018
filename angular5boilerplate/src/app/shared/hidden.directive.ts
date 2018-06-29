import { Directive, RenderComponentType, Renderer, ElementRef, Input } from '@angular/core';



@Directive({selector : '[myHidden]'})
export class HiddenDirective {

    @Input()
    myHidden : boolean;
    constructor(public el: ElementRef, public renderer: Renderer){
    }

    ngOnInit() {
        // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        // Add 'implements OnInit' to the class.
        if ( this.myHidden) {
            this.renderer.setElementStyle(
            this.el.nativeElement, 'display', 'none');
        }
    }
   
}






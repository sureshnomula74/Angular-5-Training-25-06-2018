import { Component, OnInit,Input,OnChanges,DoCheck,OnDestroy, SimpleChanges, ChangeDetectorRef } from '@angular/core';

@Component({
    selector: 'app-lifecycle',
    template: `
        <h1 class="container" >My Search:
        <input type="text" [(ngModel)] = "search">
        </h1>
        <child [search] = "search"></child>
    `
})
export class CompLifeCycleComponent  {
    constructor() { }
    search:string = 'comp';
}


//child component
@Component({
    selector: 'child',
    template: `
    <h1 class='text-danger container'>Search Text</h1>
    <div class='container'>
    <h3 class='text-primary'>{{search}}</h3>
    </div>
    `
})
export class ChildComponent implements OnInit, OnChanges, DoCheck, OnDestroy {
    changed:boolean = false;
    @Input()
    search:string;

    constructor(public cd:ChangeDetectorRef) { 
        console.log(`constructor invoked${this.search}`);
       this.cd.detach();
    }
    
    ngOnInit(): void {
        console.log(`on init invoked ${this.search}`);
       // debugger;
        /*  setTimeout(()=>{

               this.cd.reattach()

          },5000);*/

    }
    ngOnChanges(changes: SimpleChanges): void {
        console.log(`on changes  invoked${changes}`);
    }
    ngDoCheck(): void {
        console.log(`on do check`);
     /*   if(this.search.length > 3){
            //this is to reattach even though we are detached 
          this.cd.detectChanges();

        }*/
        this.cd.checkNoChanges(); //safe guard changes
    }
    ngOnDestroy(): void {
        console.log(`on destroy`);
    }
}

import {Component } from '@angular/core';
//StockComponent
@Component({
    selector: 'app-stock',
    template: `
    <div class="text-left">
    <h1 class="bg-info">Stock Exchange</h1>
    <input type="text"  placeholder="Enter stock (e.g: Verizon)"  
      (change)="onInputEvent($event)"/>
    <br/>   
    
    <div>Stock Info :{{stock}}</div>

    <order-processor  [stockSymbol]="stock" quantity="100">
       </order-processor>
</div>

     <timer-comp></timer-comp>
  `
})
//Parent component
export class StockComponent {
    stock:string;

    constructor(){
        window.setInterval(()=>
        {
            this.stock="Murthy Infotek @ $"+ 
                      Math.round(100* Math.random())
        },5000
    )
    }
    // this is event.target.value in  javascript
    onInputEvent({target}:any):void{
        this.stock=target.value;//verizon
    }
}
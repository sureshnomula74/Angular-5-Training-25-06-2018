import { Component } from '@angular/core';

@Component({
 selector: 'app-greet',
 templateUrl:'./greet.component.html',
 styleUrls:['./greet.component.css']

})
export class GreetComponent {

    title: string;
    constructor(){
        console.log("i am greet component");
        this.title = "Welcome to Angular 5.0";

     }

}
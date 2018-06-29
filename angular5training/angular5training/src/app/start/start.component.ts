import{ Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-start',
    templateUrl: './start.component.html',
    styleUrls: ['./start.component.css'],
    styles:[`
        h3{
            text-decoration:underline;
        }
   `
   ],
   encapsulation: ViewEncapsulation.Emulated
})
export class StartComponent {
    time:any;
    name:string='Sriram';
    buttonStatus:boolean= false;
    titleStyle:string = 'red';
    constructor() {
      
     }
     Save(event:any){
        alert("Ok: Your points are redeemed");
        this.buttonStatus = true;
     }
 }

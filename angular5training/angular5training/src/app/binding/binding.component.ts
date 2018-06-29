import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-binding',
    templateUrl: './binding.component.html'
   
})
export class BindingComponent implements OnInit {
    ngOnInit(): void {
      
    }
    title : string= "Working with Binding";
    
    clicked:boolean = false;
    public items:any =[
        {name:'Kendo UI'},
        {name:'EXT JS'},
        {name:'Angular JS'},
        {name:"Ember JS"},
    ]

    public clickedItem: any = {name:''}; // property
    // Ewvent Handler /Method
    onItemClicked(item: any) {
     this.clickedItem = item;
     this.clicked = true;

}

}

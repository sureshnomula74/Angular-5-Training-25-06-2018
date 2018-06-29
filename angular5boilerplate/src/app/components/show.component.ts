import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'show',
    template: `<h1 class="mycolor">
                 You have selected {{name}}
               </h1>`,
    styles: ['.mycolor {background: cyan}']
})
export class ShowComponent implements OnInit {
    name: string;
    constructor(private route: ActivatedRoute) {
        this.name = route.snapshot.params['selected'];
    }
    ngOnInit(): void { }
}


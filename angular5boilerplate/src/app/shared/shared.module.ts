import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HiddenDirective } from './hidden.directive';
import { TestComponent } from './test.component';


@NgModule({
     imports : [CommonModule, FormsModule],
     declarations : [
        HiddenDirective, TestComponent
     ],
     exports : [HiddenDirective, TestComponent]
 })
 export class SharedModule {

 }




import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


import { AppComponent } from './app.component';


import { GreetComponent } from './greet/greet.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BindingComponent } from './binding/binding.component';
import { NestedComponent } from './nested/nested.component';
import { DIModule} from './di/di.module';
import { IOModule } from './Input-output/input-output.module';
import { ViewChildComponent } from './viewchild/viewchild.component';
import { ViewChildParentComponent } from './viewchild/viewchildparent.component';
import {CompLifeCycleComponent,ChildComponent} from  './complifecycle/complifecycle.component';
import {DynamicComponent} from './dynamic/dynamic.component';
import { Service } from './dynamic/serviceloader';
import { ContactModule } from './multicom/services/contact.module';
import { ContactService } from './multicom/services/contact.service';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import { WeatherComponent } from './http/wheather.component';
import { HttpComponent } from './http/http.component';
import { HttpService } from './http/http.service';




@NgModule({
  declarations: [
    AppComponent,InvoiceComponent,BindingComponent, NestedComponent,
    ViewChildComponent,ViewChildParentComponent,
    CompLifeCycleComponent,ChildComponent,DynamicComponent, WeatherComponent,
    HttpComponent
   
    
  ],
  imports: [
    BrowserModule,FormsModule, ContactModule,HttpModule,
    HttpClientModule, ReactiveFormsModule
  ],
  schemas : [CUSTOM_ELEMENTS_SCHEMA],
  providers: [Service, HttpService],
  bootstrap: [AppComponent],
  entryComponents: [DynamicComponent]
})
export class AppModule { }

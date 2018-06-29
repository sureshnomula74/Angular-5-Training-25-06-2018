import { Component, Inject, ViewContainerRef } from '@angular/core';
import { Service } from './dynamic/serviceloader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 5 by Murthy ';

  constructor(@Inject(Service) service,@Inject(ViewContainerRef) viewContainerRef){
     service.setRootViewContainerRef(viewContainerRef);
     service.addDynamicComponent();

  }
  
    
}


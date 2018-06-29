import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { StartComponent } from './start/start.component';
import { SPArouting } from './app.routing';
import { AlwaysAuthGuard } from './services/AlwaysAuthGuard';
import { ContactListComponent } from './components/contatctlist.component';
import { NewContactComponent } from './components/newcontact.component';
import { ShowComponent } from './components/show.component';
import { ServiceComponent } from './components/services.component';
import { LoginComponent } from './components/login.component';
import { SharedModule } from './shared/shared.module';
import { TemperaturePipe } from './shared/temperature.pipe';
import { TestComponent } from './shared/test.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ContactListComponent, NewContactComponent, ShowComponent, LoginComponent,
    ServiceComponent
  ],
  imports: [
    BrowserModule, FormsModule, SPArouting, SharedModule
  ],
  providers: [AlwaysAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from "@angular/core";
import { ContactListComponent } from "./cotact.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ContactDetailsComponent } from "./contactdetails.component";
import { ContactService } from '../services/contact.service';

@NgModule({
    declarations: [
        ContactListComponent,ContactDetailsComponent
      ],
      imports: [
        BrowserModule,FormsModule
      ],
      providers: [ContactService],
      exports : [ContactListComponent]


})
export class ContactModule {

 }
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import {StockComponent} from './inputbinding';
import {OrderComponent} from './ordercomponent';
import {SMSComponent} from './smscomponent';
import {TimerComponent} from './timercomponent';
import { FormsModule } from "@angular/forms";
import {PriceQuoterComponent, OutputComponent, MailComponent} from './outputbinding';


@NgModule({
  imports : [CommonModule,FormsModule],
  declarations : [
          StockComponent,
          OrderComponent,
          SMSComponent,
          TimerComponent,
          PriceQuoterComponent,OutputComponent, MailComponent
  ],
  exports:[StockComponent, OutputComponent]
 

})
export class IOModule {}


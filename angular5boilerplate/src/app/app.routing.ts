import { AlwaysAuthGuard } from './services/AlwaysAuthGuard';
import { LoginComponent } from './components/login.component';
import { ContactListComponent } from './components/contatctlist.component';
import { NewContactComponent } from './components/newcontact.component';
import { ShowComponent } from './components/show.component';
import { ServiceComponent } from './components/services.component';
import { RouterModule, Routes } from '@angular/router';


export const customRoutes: Routes = [

      {path: '', component: LoginComponent, canActivate : [AlwaysAuthGuard]},
      {path: 'contacts', component: ContactListComponent},
      {path: 'newcontact', component: NewContactComponent},
      {path: 'show/:selected', component: ShowComponent},
      {path: 'services', component: ServiceComponent},
      {path: 'mycontacts', redirectTo: 'contact'},
      {path: '**', component: LoginComponent}

];

export const SPArouting = RouterModule.forRoot(customRoutes);

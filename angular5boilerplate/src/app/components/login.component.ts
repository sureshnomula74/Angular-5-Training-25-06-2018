import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import { User } from '../services/user';



@Component({
    selector: 'login-form',
    providers: [LoginService],
    templateUrl: './login.component.html'
})
export class LoginComponent {
    status: boolean | null = false;
    public user = new User('murthy', 'welcome');

    public errorMsg: any | null = '';

    constructor(private _service: LoginService) { }

    login() {
       
        if (!this._service.login(this.user)) {
            this.errorMsg = 'Sorry...Invalid Username or Password';
            this.status = false;
        } else {
            this.status = true;
        }
    }

    ngDoCheck() {
        //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
        //Add 'implements DoCheck' to the class.
       // debugger:
       console.log(document.getElementById("username"));
        
    }
}



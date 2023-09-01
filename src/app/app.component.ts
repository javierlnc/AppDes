import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from './services/user.service';
import { AuthenticationService } from './services/authentication.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'developmentcrm';
  constructor(private authenticationService: AuthenticationService) {
    let user$ = authenticationService.login("johnny", "kleptocracy");

        user$.subscribe(
            (data: any) => console.log(data),
            err => console.error(err)
        );
  }
}

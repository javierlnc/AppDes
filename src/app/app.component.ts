import { Component } from '@angular/core';
import { AuthenticationService } from './user/authentication.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tiquetes & Encomiendas'; constructor(private authenticationService: AuthenticationService){
  let user$ = authenticationService.login("johnny", "kleptocracy");

        user$.subscribe(
            (data: any) => console.log(data),
            err => console.error(err)
        );
  }
      }


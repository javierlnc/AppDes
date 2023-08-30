import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'developmentcrm';
  constructor(private modalService: NgbModal, private userService: UserService) {
    let hello$ = userService.helloWorld();

    hello$.subscribe(
      (data: any) => console.log(data),
      err => console.error(err)
    );
  }

  public open(modal: any): void {
    this.modalService.open(modal);
  }
}

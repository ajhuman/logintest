import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-users-welcome',
  templateUrl: './users-welcome.component.html',
  styleUrls: ['./users-welcome.component.css']
})
export class UsersWelcomeComponent implements OnInit {
  @Input() name: string
  @Output() logout = new EventEmitter()
  constructor() { }

  ngOnInit() {
  }

  logout_function(){
    this.logout.emit()
  }

}

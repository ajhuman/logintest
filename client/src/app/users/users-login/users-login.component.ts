import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-users-login',
  templateUrl: './users-login.component.html',
  styleUrls: ['./users-login.component.css']
})
export class UsersLoginComponent implements OnInit {
  name: string
  @Output() login = new EventEmitter

  constructor() { }

  ngOnInit() {
  }

  login_function(){
    this.login.emit(this.name)
    this.name = ""
  }

}

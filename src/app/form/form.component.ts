import { AgePipe } from './../age.pipe';
import { UserService } from '../user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../user/user.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})

export class FormComponent implements OnInit {
  nameInput: string;
  surnameInput: string;
  addressInput: string;
  birthdateInput: number;

  constructor(private userService: UserService ) {
  }

  ngOnInit(): void {
  }

  onAddUser(): void {
    const user1 = new User(
      this.nameInput,
      this.surnameInput,
      this.addressInput,
      this.birthdateInput
    );
    this.userService.addUser(user1);
  }
}

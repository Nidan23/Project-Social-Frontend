import { User } from './../model/users.model';
import { Component } from '@angular/core';
import { UserRepository } from '../users/users.repository';

@Component({
  selector: 'user-modal',
  templateUrl: 'user-modal.component.html'
})
export class UserModalComponent {

  public user: User | undefined
  public displayStyle: string = 'none'

  constructor(private userRepository: UserRepository) { }

  get userData(): User{
    if(this.user)
      return this.user
    else 
      return new User
  }

  getAllData(id: number){
    this.user = this.userRepository.getUser(id)
    this.openPopup()
  }

  openPopup() {
    this.displayStyle = "block";
  }

  closePopup() {
    this.displayStyle = "none";
  }

}

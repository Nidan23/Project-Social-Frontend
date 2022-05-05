import { UserRepository } from './users.repository'
import { User } from '../model/users.model'
import { Component } from "@angular/core"

@Component({
    selector: 'user-list',
    templateUrl: 'users.component.html'
})

export class UsersComponent {
    constructor(private repository: UserRepository) {}

    get allUsers(): User[]{
        return this.repository.getAllUsers()
    }

    getUser(id: number): User{
        return this.repository.getUser(id)
    }
}
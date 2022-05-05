import { Injectable } from "@angular/core"
import { User } from "../model/users.model"
import { DataSource } from "../database/datasource"

@Injectable()
export class UserRepository{
    private users: User[] = []

    constructor(private dataSource: DataSource){
        dataSource.getAllUsers().subscribe(data =>{
            this.users = data
        })
    }

    getAllUsers(): User[]{
        return this.users
    }

    getUser(id: number): User{
        const result = this.users.find(user => user.id == id)

        if(result)
            return result
        else
            return new User
    }
}
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { User } from '../model/users.model'
import { Post } from '../model/post.model'

@Injectable()
export class DataSource{

    constructor(private http: HttpClient){}

    getAllUsers(): Observable<User[]>{
        return this.http.get<User[]>(`http://localhost:3000/users/all`)
    }

    getUser(id: number): Observable<User>{
        return this.http.get<User>(`http://localhost:3000/users/${id}`)
    }

    getAllPost(): Observable<Post[]>{
        return this.http.get<Post[]>('http://localhost:3000/posts/all')
    }
}
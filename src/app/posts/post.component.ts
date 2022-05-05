import { UserRepository } from './../users/users.repository';
import { User } from './../model/users.model';
import { Post } from './../model/post.model';
import { PostRepository } from './post.repository';
import { Component } from "@angular/core"

@Component({
    selector: 'post-list',
    templateUrl: 'post.component.html',
    styleUrls: ['post.component.css']
})

export class PostComponent {

    constructor(private postRepository: PostRepository, private userRepository: UserRepository){}

    get allPosts(): Post[]{
        return this.postRepository.getAllPosts()
    }

    getPost(id: number): Post{
        return this.postRepository.getPost(id)
    }

    getUserName(id: number): User{
        return this.userRepository.getUser(id)
    }
}
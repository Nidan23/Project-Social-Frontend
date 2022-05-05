import { Injectable } from "@angular/core"
import { DataSource } from "../database/datasource"
import { Post } from "../model/post.model"

@Injectable()
export class PostRepository {
    private posts: Post[] = []

    constructor(private dataSource: DataSource){
        dataSource.getAllPost().subscribe(data => {
            this.posts = data
        })
    }

    getAllPosts(): Post[]{
        return this.posts
    }

    getPost(id: number): Post{
        const result = this.posts.find(post => post.userId == id)

        if(result)
            return result
        else
            return new Post
    }
}
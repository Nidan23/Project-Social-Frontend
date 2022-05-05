import { NgModule } from "@angular/core"
import { UserRepository } from "../users/users.repository"
import { PostRepository } from "../posts/post.repository"
import { DataSource } from "../database/datasource"
import { HttpClientModule } from "@angular/common/http"

@NgModule({
    imports: [HttpClientModule],
    providers: [UserRepository, PostRepository, DataSource]
})

export class ModelModule {}
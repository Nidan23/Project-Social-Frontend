import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { PostComponent } from './post.component'
import { FormsModule } from '@angular/forms'

@NgModule({
    imports: [FormsModule, BrowserModule],
    declarations: [PostComponent],
    exports: [PostComponent]
})

export class PostModule {}
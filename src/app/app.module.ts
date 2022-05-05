import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UsersModule } from './users/users.module';
import { PostModule } from './posts/post.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersModule,
    PostModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

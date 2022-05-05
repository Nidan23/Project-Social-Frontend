import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"
import { FormsModule } from "@angular/forms"
import { ModelModule } from "../model/model.module"
import { UsersComponent } from "./users.component"

@NgModule({
    imports: [ModelModule, BrowserModule, FormsModule],
    declarations: [UsersComponent],
    exports: [UsersComponent]
})

export class UsersModule {}
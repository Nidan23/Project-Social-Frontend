import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { UserModalComponent } from './user-modal.component'

@NgModule({
    imports: [BrowserModule],
    declarations: [UserModalComponent],
    exports: [UserModalComponent]
})

export class UserModalModule {}
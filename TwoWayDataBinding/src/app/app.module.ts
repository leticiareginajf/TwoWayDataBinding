import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PersonComponent } from './person/person.component';
import { StatusClassPipe } from './pipes/status-class.pipes';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    StatusClassPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { UserList } from './userlist.component';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, UserList ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

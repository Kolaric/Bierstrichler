import { User } from './userlist.service';
import { Component } from '@angular/core'

@Component({
    selector: 'users',
    template: `<h3>{{ title }}</h3>
    <ul>
<li *ngFor="let user of users">{{user.name}}</li>
    </ul>
    `
})
export class UserList {
    title: string = "Hello World"
    users: User[] = [{
        name: "Stefan"
    }, {
        name: "hans"
    }]
}
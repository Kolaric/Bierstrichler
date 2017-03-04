import { User, UserListService } from './userlist.service';
import { Component } from '@angular/core'

@Component({
    selector: 'users',
    template: `<h3>{{ title }}</h3>
    <ul>
<li *ngFor="let user of users">{{user.name}}</li>
    </ul>
    `,
    providers: [UserListService]
})
export class UserList {
    title: string = "Hello World"
    users: User[]
    constructor(userlist: UserListService) {
        this.users = userlist.getUsers();
    }
}
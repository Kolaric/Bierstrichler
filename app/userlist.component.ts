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
    constructor(private userlist: UserListService) {
        
    }

    async ngOnInit() {
        try {
            this.users = await this.userlist.getUsers()
        } catch(error) {
            this.users = [{name:"Default"}];
        }
    }
}
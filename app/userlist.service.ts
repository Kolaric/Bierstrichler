export class UserListService {
    getUsers() {
        return <User[]>[
            {
                name: "stefan"
            },
            {
                name: "hans"
            }
        ]
    }
}

export interface User {
    name: string
}
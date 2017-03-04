export class UserListService {
    getUsers() {
        return <User[]>[
            {
                name: "stefan"
            },
            {
                name: "Hans"
            }
        ]
    }
}

export interface User {
    name: string
}
export class UserListService {
    getUsers(): Promise<User[]> {
        return new Promise<User[]>((resolve, reject) => {
            resolve([]);
        });
    }
}

export interface User {
    /**
     * ID in the database
     * 
     * @type {number}
     * @memberOf User
     */
    id: number
    /**
     * First name of the user
     * 
     * @type {string}
     * @memberOf User
     */
    firstName: string
    /**
     * Second name of the user
     * 
     * @type {string}
     * @memberOf User
     */
    secondName: string
    /**
     * Current balance on his/her account
     * 
     * @type {number}
     * @memberOf User
     */
    balance: number
    /**
     * The user's permission
     * 
     * @type {Permission}
     * @memberOf User
     */
    permissions: Permission

}

export enum Permission {
    AddUser = 0,
    DeleteUser = 1 << 0,
    ChangeUser = 1 << 1,
    AddItem = 1 << 2,
    DeleteItem = 1 << 3,
    ChangeItem = 1 << 4,
    ChangeApplicationSettings = 1 << 5,
    PayIn = 1 << 6,
    PayOut = 1 << 7,
    LogIn = 1 << 8
}

export interface Corpo {
    vulgo?: string

    recipierungsDatum: Date

    chargen: string[]

    status: string | VStatusBase
}

type VStatusBase = "Fuchs" | "Aktiver" | "Inaktiv" | "AH" | "ZM" | "Verkehsgast"
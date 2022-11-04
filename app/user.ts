export class User {
    id: number|null;
    username: string;
    password: string;

    constructor(id: number|null, username: string, password: string)
    {
        this.id = id;
        this.username = username;
        this.password = password;
    }
}

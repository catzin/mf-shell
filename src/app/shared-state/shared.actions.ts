import { User } from "../core/models/user.model";

export class AddLoggedUser{
    static readonly type = '[ADD LOGER USER] Add Logged User';
    constructor(public payload : User){}
}
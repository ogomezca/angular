import { Token } from "app/models/token.model";

export class CurrentUserInfo{
    private _token:Token;
    private _userName:string;
    private _userType:string;

    get token():Token{
        return this._token;
    }

    set token(tkn:Token){
        this._token = tkn;
    }

    get userType():string{
        return this._userType;
    }

    set userType(userType:string){
        this._userType = userType;
    }

    get userName():string{
        return this._userName;
    }

    set userName(userName:string){
        this._userName = userName;
    }
}
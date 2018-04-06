export class Token{

    private _id:string;
    private value:string;
    private userId;
    private __v:number;

    get id():string{
        return this._id;
    }

    set id(id:string){
        this._id = id;
    }

    get val():string{
        return this.id;
    }

    set val(value:string){
        this.value = value;
    }

    get _userId():string{
        return this.userId;
    }

    set _userId(userId:string){
        this.userId = userId;
    }

    get v():number{
        return this.__v;
    }

    set v(v:number){
        this.__v = v;
    }
}
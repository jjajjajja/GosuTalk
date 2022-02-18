import { Url } from "./url";

export enum UserType{
    NORMAL, 
    ADMIN,
}

export class User{
    user_uid : number;
    user_name : string;
    user_profile_url: Url;
    freinds_uid: Set<number>;
    
    constructor(user_uid: number, user_name: string, user_profile_url : Url){
        this.user_uid = user_uid;
        this.user_name = user_name;
        this.user_profile_url = user_profile_url;
        this.freinds_uid = new Set<number>();
    }

    static async findUser(uid: number) : Promise<User> {
        return Promise.reject("sorry this function is not implemented yet,,,");
        // todo
        return new User(0, "test", new Url(""));
    }

    async sendMessage(){
        return Promise.reject("sorry this method is not implemented yet,,,");      
    }
}

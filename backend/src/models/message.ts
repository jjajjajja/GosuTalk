import { Url } from "./url";

export class Message{
    author_uid : number;
    text : string;
    images_url? : Array<Url>;
    created_time: Date;
    deleted: boolean;
    hidden: boolean;
    
    constructor(author_uid : number, text: string, images_url? :Array<Url>){
        this.author_uid = author_uid
        this.text = text;
        this.images_url = images_url;
        this.created_time = new Date();
        this.deleted = false;
        this.hidden = false;
    }
}
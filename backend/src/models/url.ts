export class Url{
    schema: string;
    hostname: string;
    path: string;
    port: number;

    constructor(s: string){
        this.schema = "http";
        this.hostname = "test.com";
        this.path = "/hello/world.png";
        this.port = 80;
    }

    toString(): string{
        return `${this.schema}://${this.hostname}:${this.port}/${this.path}`
    }
}
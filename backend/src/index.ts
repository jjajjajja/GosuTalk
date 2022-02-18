import 'module-alias/register';
import { createServer } from 'net';
import { PromiseSocket } from 'promise-socket';
import dotenv from 'dotenv';

dotenv.config();

const sock_server = createServer(async (s) => {
    const message_proc = (msg: Buffer) => {
        return msg.toString();
    };

    
    const client = new PromiseSocket(s);
    try {
        while (true) {
            const data = await client.read();
            if (data instanceof Buffer) {
                const res = message_proc(data);
                await client.write(res);
            }
            if (data === undefined) break;
        }
    } catch (error) {

    }
});

sock_server.listen(1337, () => console.log('socket server is running...'));

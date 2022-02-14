import 'module-alias/register';
import express from 'express';
import routers from '@routers';
import { createServer } from 'net';
import { PromiseSocket, TimeoutError } from 'promise-socket';
import dotenv from 'dotenv';

// initialize components
dotenv.config();
const app = express();

// o_o is promise-socket client socket only???
// then there is no reason to use promise-socket
// if you do not very hater of event handling...

const sock_server = createServer(async (s) => {
    const message_proc = (msg: Buffer) => {
        return msg.toString();
    };

    const client = new PromiseSocket(s);
    client.setTimeout(10000);
    console.log(`connected from ${client.socket.localAddress}:${client.socket.localPort}`);
    try {
        while (true) {
            const data = await client.read();
            if (data instanceof Buffer) {
                const res = message_proc(data);
                await client.write(res);
            }
            if (data === undefined) break;
        }
        console.log(`disconnected from ${client.socket.localAddress}:${client.socket.localPort}`);
    } catch (error) {
        if (error instanceof Error) {
            console.error(`error from ${client.socket.localAddress}:${client.socket.localPort}`);
        }
    }
});

// handle express-server
// i hate hanky-panky code so i isolated router code with main ts file...
app.use('/', routers);
app.listen(8888, () => console.log('express server is running....'));

// handle socket-server...
sock_server.listen(1337, () => console.log('socket server is running...'));

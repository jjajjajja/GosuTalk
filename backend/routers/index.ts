import { Router } from 'express';

const routers = Router();

routers.get('/', (req, res) => {
    res.send('hello fuck');
});

routers.get('*', (req, res) => {
    res.status(404).send('404 error!');
});

export = routers;

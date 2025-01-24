import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import routes from './routes.js';

const app = express();
const host = process.env.HOST ?? '127.0.0.1';
const port = parseInt(process.env.PORT ?? 8000);

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: "100mb"}));
app.use('/', routes);

app.listen(port, host, () => {
    console.log(`Servidor iniciado em http://${host}:${port}`);
})
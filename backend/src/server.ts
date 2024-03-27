import express, {Request, Response, NextFunction} from "express";
//erros mais amigaveis
import 'express-async-errors';
import cors from 'cors';
import {router} from './routes';

const app = express();
app.use(express.json());
app.use(cors())

//usando a rota
app.use(router);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if(err instanceof Error) {
        return res.status(400).json({
            error: err.message
        })
    }

    return res.status(500).json({
        status: 'error',
        message: 'Internal server error.'
    })
})


//iniciar o projeto
app.listen(3333, () => console.log('servidor online'))
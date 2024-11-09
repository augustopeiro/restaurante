import { Router, Request, Response } from 'express';
import { CreateUserController } from './controllers/user/CreateUserController';

const router = Router();

router.post('/users', new CreateUserController().handle)

router.get('/teste', (req: Request, res: Response) => {
    return res.json({ ok: true})
})

export { router };
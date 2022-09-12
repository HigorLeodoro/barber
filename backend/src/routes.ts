import { Router, Request, Response } from 'express'

import { CreateUserController } from './controllers/user/CreateUserController'
import { AuthUserController } from './controllers/user/AuthUsereController'
import { DetailUserController } from './controllers/user/DetailUSerController'
import { UpdateUserController } from './controllers/user/UpdateUserController'

import { CreateHaircutController } from './controllers/haircuts/CreateHaircurtController'
import { ListHaircutController } from './controllers/haircuts/ListHaircutController'
import { UpdateHaircutController } from './controllers/haircuts/UpdateHaircutController'
import { CheckSubscriptionController } from './controllers/haircuts/CheckSubscriptionController'
import { CountHaircutsController } from './controllers/haircuts/CountHaircutsController'
import { DetailHaircutController } from './controllers/haircuts/DetailHaircutController'

import { NewScheduleController } from './controllers/schedule/NewScheduleController'
import { ListScheduleController } from './controllers/schedule/ListScheduleController'
import { FinishScheduleController } from './controllers/schedule/FinishScheduleController'


import { isAutenticated } from './middlewares/isAutenticated'

const router = Router()

// ROTAS USER
router.post('/users', new CreateUserController().handle)
router.post('/session', new AuthUserController().handle)
router.get('/me', isAutenticated, new DetailUserController().handle)
router.put('/users', isAutenticated, new UpdateUserController().handle)


// ROTAS HAIRCUT
router.post('/haircut', isAutenticated, new CreateHaircutController().handle)
router.get('/haircuts', isAutenticated, new ListHaircutController().handle)
router.put('/haircut', isAutenticated, new UpdateHaircutController().handle)
router.get('/haircut/check', isAutenticated, new CheckSubscriptionController().handle)
router.get('/haircut/count', isAutenticated, new CountHaircutsController().handle)
router.get('/haircut/detail', isAutenticated, new DetailHaircutController().handle)


// ROTAS SCHEDULE / SERVIÇOS
router.post('/schedule', isAutenticated, new NewScheduleController().handle)
router.get('/schedule', isAutenticated, new ListScheduleController().handle)
router.delete('/schedule', isAutenticated, new FinishScheduleController().handle)

export { router }
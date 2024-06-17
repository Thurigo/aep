import { Router } from 'express'
import { UserControler } from './controllers/user-controller'
import { gastossControler } from './controllers/gasto-controller'
import { gastosService } from './Service/gastos.service'
import { UserService } from './Service/user.service'

const routes = Router()

routes.post('/create/user', new UserControler().create)
routes.get('/get/user', new UserControler().findOneByID)
routes.get('/get/alluser', new UserControler().findMany);

routes.post('/create/gasto', new gastossControler().create)
routes.get('/get/gasto', new gastossControler().findOneByID)

routes.get('/get/User/all/task', new  UserService().gastoUser)

routes.put('/put/task', new gastossControler().putTask)
routes.delete('/delete/task', new gastossControler().deleteTask)

routes.get('/get/filter/gasto', new gastosService().filtergastos)
routes.get('/get/filter/User-task-count', new UserService().countGastos)
routes.get('/get/filter/User-task-count', new UserService().countGastos)
routes.get('/get/alltask', new gastosService().findmany)

export default routes
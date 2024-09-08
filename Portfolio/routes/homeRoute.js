import { homeController } from '../controllers/homeController.js'
import { skillController } from '../controllers/skillController.js'
import { servicesController } from '../controllers/servicesController.js'
import { contactController } from '../controllers/contactController.js'
import { hireController } from '../controllers/hireController.js'

import express from 'express'
const homeRouter = express.Router()

homeRouter.get('/', homeController)
homeRouter.get('/skill', skillController)
homeRouter.get('/hire', hireController)
homeRouter.get('/services', servicesController)
homeRouter.get('/contact', contactController)

// export default homeRouter
export default homeRouter
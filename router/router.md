

import express from 'express'

const router = express.Router()

router.post('/create-student')

it call Controller


import express from 'express'
import { StudentControllers } from './student.controller'

const router = express.Router()



router.post('/create-student',StudentControllers.createStudent)


export const StudentRoutes = router

<!-- router nijei Object so its does not need Object -->
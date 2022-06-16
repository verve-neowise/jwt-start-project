import { Role } from '@prisma/client';
import { Router } from 'express';
import authorization from '../middlewares/authorization';
import worksheetService from '../services/worksheet.service';
import { error } from '../util';

const router = Router()

// for user and admin
router.get('/', authorization([Role.USER, Role.ADMIN]), (req, res) => {

    worksheetService.findAll()
        .then(worksheets => res.json({
            message: 'Worksheets retrieved',
            worksheets
        }))
        .catch(err => res.status(500).json({
            message: 'Something went wrong'
        }))
})

// For only admin
router.post('/', authorization([Role.ADMIN]), (req, res) => {

    const { content } = req.body

    worksheetService.create(content)
        .then(worksheet => res.json({
            message: 'Worksheet created',
            worksheet
        }))
        .catch(err => {
            error(err)
            res.status(500).json({
                message: 'Something went wrong',
            })
        })
})


export default router;
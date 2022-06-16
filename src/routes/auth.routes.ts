import { Router } from 'express'
import { Role } from '@prisma/client'
import jwtService from '../services/jwt.service'
import userService from '../services/user.service'
import bcrypt from 'bcryptjs'

const router = Router()

router.post('/login', async (req, res) => {
    let { username, password } = req.body

    try {
        const user = await userService.findByUsername(username)
        if (!user) {
            return res.status(401).json({ message: 'Invalid username or password' })
        }

        if (bcrypt.compareSync(password, user.password)) {
            res.json({
                username,
                token: jwtService.sign(user)
            })
        }
        else {
            res.status(401).json({ message: 'Invalid username or password' })
        }
    }
    catch (err) {
        console.log(err)
        
        res.status(500).json({
            message: 'something went wrong'
        })
    }
})

router.post('/register', async (req, res) => {
    let { username, password } = req.body

    try {
        const user = await userService.findByUsername(username)

        if (user) {
            return res.status(400).json({ message: 'Username already taken.' })
        }

        const newUser = await userService.create(username, password, Role.USER)

        res.json({
            username,
            token: jwtService.sign(newUser)
        })
    }
    catch (err) {
        console.log(err);

        res.status(500).json({
            message: 'something went wrong'
        })
    }
})

export default router;
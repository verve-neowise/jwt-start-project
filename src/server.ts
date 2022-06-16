import express from 'express'
import cors from 'cors'
import authRoutes from './routes/auth.routes'
import worksheetService from './services/worksheet.service'
import worksheetRoutes from './routes/worksheet.routes'

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/auth', authRoutes)
app.use('/worksheet', worksheetRoutes)

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log("Server is running...");
})
import express from 'express'
import projectsRoutes from './routes/projects.routes.js'
import taksRoutes from './routes/tasks.routes.js'

const app = express()

app.use(express.json())
app.use(projectsRoutes)
app.use(taksRoutes)

export default app
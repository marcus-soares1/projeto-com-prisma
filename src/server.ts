import cors from "cors"
import express from "express"
import { errorHandlerMiddleware } from "./middlewares/errorHandler"
import { leadsRouter } from "./routes/leadsRouter"
import { groupsRouter } from "./routes/groupsRouter"
const app = express()

app.use(cors())
app.use(express.json())
app.use('/api/leads', leadsRouter)
app.use('/api/groups', groupsRouter)
app.use(errorHandlerMiddleware)



const PORT = process.env.PORT || 3000
app.listen(PORT, ()=> console.log(`http://localhost:${PORT}/`))
import cors from "cors"
import express from "express"
import { router } from "./router"
import { errorHandlerMiddleware } from "./middlewares/errorHandler"
const app = express()

app.use(express.json())
app.use(cors())
app.use('/api', router)
app.use(errorHandlerMiddleware)



const PORT = process.env.PORT || 3000
app.listen(PORT, ()=> console.log(`http://localhost:${PORT}/`))
import { Router } from "express";
import { HttpsError } from "./errors/HttpsError";

const router = Router()

router.get('/test', async (req, res, next)=>{
    try {
        throw new HttpsError(500, "Teste")
        res.json({message: "OK"})


        
    } catch (error) {
        next(error)
    }
})

export { router }
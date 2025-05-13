import { ErrorRequestHandler } from "express";
import { HttpsError } from "../errors/HttpsError";

export const errorHandlerMiddleware: ErrorRequestHandler = (error, req, res, next) => {
    if(error instanceof HttpsError) {
        res.status(error.status).json({message: error.message})
    }
    else if(error instanceof Error) {
        res.status(400).json({message: error.message})
    }
    else {
        res.status(500).json({message: "Unkown internal error."})
    }

}
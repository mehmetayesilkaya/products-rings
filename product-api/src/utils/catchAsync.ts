import { NextFunction, Request, Response } from 'express'

export default (fn: (req: Request, res: Response, next?: NextFunction) => Promise<Response | void>) => {
    return (req: Request, res: Response, next?: NextFunction) => {
        fn(req, res, next).catch((err) => next?.(err))
    }
}
import { Request, Response } from "express";
import { gastossControler } from "../controllers/gasto-controller";



export class UserService {

    async countGastos(req: Request, res: Response) {
        try {
            const resultado = Number(req.body.id)
            const pass = Number(req.body.id)            
            const uncount = await new gastossControler().UserfindMany(resultado)
            console.log(uncount.length)
            const count = uncount.map((task, i) => {
                return i + 1
            }
            )
            console.table(count)
            return res.status(200).json(count.length)
        } catch (error) {
            res.status(500).json('deu ruim')
        }

    }

    async gastoUser(req: Request, res: Response) {
        try {
            const resultado = Number(req.body.id)
            const uncount = await new gastossControler().UserfindMany(resultado)
            console.table(uncount)
            return res.status(200).json(uncount)
        } catch (error) {
            return res.status(500).json('deu ruim')
        }
    }




} 
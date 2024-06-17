import { Request, response, Response } from "express";
import { gastossControler } from "../controllers/gasto-controller";



export class gastosService {

    async filtergastos(req: Request, res: Response) {
       try {
          const resultado = req.body.dataStart
           console.table(resultado)

           const unfilter = await new gastossControler().findMany()
           const filter = unfilter.filter((gastos) => gastos.dataStart === resultado)
            console.log(filter)
          return res.status(200).json(filter)
       } catch {
            return res.status(500).json({ message: 'Erro ao buscar tarefas.' }); 

      }
    }

    async findmany(req: Request, res: Response) {
        try {

            const finded = await new gastossControler().findMany()
            return res.status(200).json(finded)
        } catch {
            return res.status(500).json({ message: 'Erro ao buscar tarefas.' }); 

        }
    }






}
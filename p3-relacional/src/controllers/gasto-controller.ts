import { Response, Request } from "express";
import { gastoRepositorio } from "../repositorio/gastos-repositorio"
import { User } from "../entities/Users";
import { Console } from "console";
import { get } from "http";
import { Repository } from "typeorm";


export class gastossControler {

    async create(req: Request, res: Response) {
        try {
            const newTask = gastoRepositorio.create(req.body)
            console.table(newTask)

            await gastoRepositorio.save(newTask)
            console.log(newTask)
            return res.status(201).json(newTask)
        } catch (error) {
            return res.status(error)
        }
    }

    async findOneByID(req: Request, res: Response) {
        try {
            const resultado =  Number(req.body.id);

            console.table(resultado)
            const task = await gastoRepositorio.findOneBy({ id: resultado })
            console.table(task)
            return res.status(200).json(task)

        } catch (error) {
            return res.status(error);
        }
    }

    async UserfindMany(req: number) {
        
        try{
            
            
            const alltask = await gastoRepositorio.find(
                {
        
                        where: {
                        User: {
                            id: req
                        }
                    }
                }
            )
            return alltask
        }catch(error){
            console.log(error)
        }
       
    }

    async findMany() {
        try {


            const alltask = await gastoRepositorio.find(
                {
                    relations: {
                    }
                }
            )
            return alltask
        } catch (error) {
            console.error(error); 
        }
    }

    async putTask(req: Request, res: Response) {
        try {
            const resultado = req.body;

            console.table(resultado)
            const task = await gastoRepositorio.findOneBy({ id: resultado.id })
            if (!task)
                return res.status(403).json('Não encontrado')
            console.table(task)

            const upadateTaks = await gastoRepositorio.save(Object.assign(task, resultado))
            return res.status(200).json(upadateTaks)

        } catch (error) {
            return res.status(400).json('Deu ruim')
        }
    }

    async deleteTask(req: Request, res: Response) {
        try {
            const resultado = req.body

            const task = await gastoRepositorio.findOneBy({ id: resultado.id });
            if (!task)
                return res.status(403).json('Não encontrado')

            const deleteTask = await gastoRepositorio.remove(resultado)
            console.log(deleteTask)


            return res.status(200).json('deletado')
        } catch (error) {
            return res.status(404).json('deu ruim')
        }
    }

}
//atualizar e editar 
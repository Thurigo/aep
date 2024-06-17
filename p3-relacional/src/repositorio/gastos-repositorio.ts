
import { AppDataSource } from "../data-source";
import { Gastos } from "../entities/Gasto";
import { User } from "../entities/Users";

export const gastoRepositorio = AppDataSource.getRepository(Gastos)

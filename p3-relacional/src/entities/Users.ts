import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Gastos } from "./Gasto"

@Entity('Users')
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nome: string

    @Column()
    senha: string

    @Column()
    email: string

    @OneToMany(()=> Gastos, task => task.User)
    gastos:Gastos[]

}

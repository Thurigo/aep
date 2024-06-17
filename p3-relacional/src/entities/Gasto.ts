import { Entity, PrimaryGeneratedColumn, Column, NumericType, ManyToMany, ManyToOne, JoinColumn } from "typeorm"
import { User } from "./Users"

export type status = "CONCLUIDA" | "ANDAMENTO" | "PENDENTE";
@Entity('gastos')
export class Gastos{


    @PrimaryGeneratedColumn()
    id:number 
    
    @Column()
    valor:number 

    @Column()
    dataStart:Date

    @Column()
    Local:string

    @ManyToOne(()=> User, user => user.gastos) 
    @JoinColumn({name: 'user_id'})
    User:User 

}
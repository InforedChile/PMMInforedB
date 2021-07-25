import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('tbl_organizacion')
export class Organizacion{
    @PrimaryGeneratedColumn()
    id_organizacion: number;

}
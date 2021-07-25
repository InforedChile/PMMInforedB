import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('tbl_publico_aviso')
export class Institucion{

    @PrimaryGeneratedColumn()
    id_publico_aviso: number;

}
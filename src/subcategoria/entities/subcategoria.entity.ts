import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('tbl_publico_cate_sub')
export class Subcategoria{
    @PrimaryGeneratedColumn()
    id_publico_cate_sub: number;

}
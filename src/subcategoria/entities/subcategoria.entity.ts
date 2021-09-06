import { ST } from "src/enums";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('tbl_publico_cate_sub')
export class Subcategoria{
    @PrimaryGeneratedColumn()
    id_publico_cate_sub: number;

    @Column({
        type: 'int',
        nullable:false
    })
    id_publico_cate: number;

    @Column({
        type: 'varchar',
        length: 200,
        collation: 'latin1_swedish_ci',
        nullable: false
    })
    nombre_publico_cate_sub: string;

    @Column({
        type:'varchar',
        length: 200,
        collation:'latin1_swedish_ci',
        nullable:false
    })
    imagen: string;

    @Column({
        type:'enum',
        enum: ST,
        default: ST.INACTIVO,
        collation:'latin1_swedish_ci',
        nullable:false       
    })
    st_publico_cate_sub: ST;

}
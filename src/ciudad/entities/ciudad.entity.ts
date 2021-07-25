import { ST } from "src/enums";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('tbl_ciudad')
export class Ciudad{
    @PrimaryGeneratedColumn()
    id_ciudad: number;

    @Column({ 
        type:'tinytext',
        default: null,
        collation:'utf8_general_ci'
    })
    nombre_ciudad: string;

    @Column({
        type:'tinyint',
        default: 0
    })
    id_region: number;

    @Column({
        type:'enum',
        enum: ST,
        default: ST.ACTIVO,
        collation:'utf8_general_ci'
    })
    st_ciudad: ST;
}
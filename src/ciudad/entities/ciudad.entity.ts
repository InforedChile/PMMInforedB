import { ST } from "src/enums/st.enum";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('tbl_ciudad')
export class Ciudad{
    @PrimaryGeneratedColumn()
    id_ciudad: number;

    @Column({ 
        type:'tinytext',
        default: null
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
        default: ST.ACTIVO
    })
    st_ciudad: ST;
}
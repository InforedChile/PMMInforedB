import { ST } from "src/enums/st.enum";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('tbl_publico_cate')
export class Categoria{
    @PrimaryGeneratedColumn()
    id_publico_cate:number;

    @Column({
        type:"varchar",
        length: "200",
        collation:'latin1_swedish_ci',
        nullable:false       
    })
    nombre_publico_cate: string;

    @Column({
        type:"varchar",
        length: "200",
        collation:'latin1_swedish_ci',
        nullable:false       
        
    })
    imagen: string;

    @Column({
        type:'enum',
        enum: ST,
        default: ST.ACTIVO,
        collation:'latin1_swedish_ci',
        nullable:false       
    })
    st_ciudad: ST;

}
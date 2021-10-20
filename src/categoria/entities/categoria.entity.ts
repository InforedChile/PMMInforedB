import { ApiProperty } from "@nestjs/swagger";
import { ST } from "src/enums";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('tbl_publico_cate')
export class Categoria{
    @ApiProperty({
        description: 'Identificador de categoria'
    })
    @PrimaryGeneratedColumn()
    id_publico_cate:number;

    @ApiProperty({
        description:'Nombre de categoria'
    })
    @Column({
        type:"varchar",
        length: "200",
        //collation:'latin1_swedish_ci',
        nullable:false       
    })
    nombre_publico_cate: string;

    @ApiProperty({
        description: 'Imagen a ser mostrada'
    })
    @Column({
        type:"varchar",
        length: "200",
        //collation:'latin1_swedish_ci',
        nullable:false       
        
    })
    imagen: string;

    @ApiProperty({})
    @Column({
        type:'int',
        nullable: false
    })
    orden: number;

    @ApiProperty({
        description: 'Indica si la categoria es visible o no',
        enum: ST
    })
    @Column({
        type:'enum',
        enum: ST,
        default: ST.ACTIVO,
        //collation:'latin1_swedish_ci',
        nullable:false       
    })
    st_publico_cate: ST;

}
import { ApiProperty } from "@nestjs/swagger";
import { ST } from "src/enums";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('tbl_publico_cate_sub')
export class Subcategoria{
    @ApiProperty({
        description:'Identificador de la subcategoria',
        type: 'int'

    })
    @PrimaryGeneratedColumn()
    id_publico_cate_sub: number;

    @ApiProperty({
        description: 'Id de la categoria Asociada',
        type: 'int',
        nullable: false
    })
    @Column({
        type: 'int',
        nullable:false
    })
    id_publico_cate: number;

    @ApiProperty({
        description:'Nombre de la subcategoria',
        type:'string',
        nullable: false,
        maxLength: 200
    })
    @Column({
        type: 'varchar',
        length: 200,
        collation: 'latin1_swedish_ci',
        nullable: false
    })
    nombre_publico_cate_sub: string;

    @ApiProperty({
        description: 'Imagen de la sub categoria',
        type: 'varchar',
        maxLength: 200,
        example:''
    })
    @Column({
        type:'varchar',
        length: 200,
        collation:'latin1_swedish_ci',
        nullable:false,
        default:''
    })
    imagen: string;

    @ApiProperty({
        description: 'Indica el estado de la subcategoria',
        type: 'enum',
        enum: ST,
        example: ST.ACTIVO

    })
    @Column({
        type:'enum',
        enum: ST,
        default: ST.INACTIVO,
        collation:'latin1_swedish_ci',
        nullable:false       
    })
    st_publico_cate_sub: ST;

}
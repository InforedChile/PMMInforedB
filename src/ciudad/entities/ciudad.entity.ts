import { ApiProperty } from "@nestjs/swagger";
import { ST } from "src/enums";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('tbl_ciudad')
export class Ciudad{

    @ApiProperty({
        description: 'Identificador de la ciudad'
    })
    @PrimaryGeneratedColumn()
    id_ciudad: number;

    @ApiProperty({
        description: 'Nombre de la ciudad'
    })
    @Column({ 
        type:'tinytext',
        default: null,
        collation:'utf8_general_ci'
    })
    nombre_ciudad: string;

    @ApiProperty({
        description: 'Region donde se ubica'
    })
    @Column({
        type:'tinyint',
        default: 0
    })
    id_region: number;

    @ApiProperty({
        description: 'Indica si la ciudad esta activa o no',
        enum:ST
    })
    @Column({
        type:'enum',
        enum: ST,
        default: ST.ACTIVO,
        collation:'utf8_general_ci'
    })
    st_ciudad: ST;
}
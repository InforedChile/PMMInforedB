import { ApiProperty, ApiTags } from "@nestjs/swagger";
import { type } from "os";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('tbl_persona')
export class Persona {
    @ApiProperty({
        description: 'Identificacion de la persona'
    })
    @PrimaryGeneratedColumn()
    id_persona: number;

    @ApiProperty({
        description: 'id de la organizacion asociada ',
        type: 'int',
    })
    @Column({
        type: 'int',
        nullable: false
    })
    id_organizacion: number;

    /*@ApiProperty({
        description: 'Identificador de la institucion asociada',
        type: 'int',
        nullable: true,
    })
    @Column()*/
    

}
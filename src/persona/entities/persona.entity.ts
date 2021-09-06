import { ApiProperty} from "@nestjs/swagger";
import { ST } from "src/enums";
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

    @ApiProperty({
        description: 'Identificador de la institucion asociada',
        type: 'int',
        nullable: true,
    })
    @Column()
    id_institucion: number;

    @ApiProperty()
    @Column()
    nombre: string

    @ApiProperty()
    @Column()
    rut: string

    @ApiProperty()
    @Column()
    departamento: string

    @ApiProperty()
    @Column()
    area: string

    @ApiProperty()
    @Column()
    sub_area: string

    @ApiProperty()
    @Column()
    direccion: string

    @ApiProperty()
    @Column()
    correo: string

    @ApiProperty()
    @Column()
    telefono: string

    @ApiProperty()
    @Column()
    cargo: string

    @ApiProperty()
    @Column({
        type: 'enum',
        enum: ST,
        default: ST.ACTIVO
    })
    st_persona:ST
    

}
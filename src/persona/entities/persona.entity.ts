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

    @ApiProperty({
        description:''
    })
    @Column()
    nombre: string

    @ApiProperty({
        description:''
    })
    @Column()
    rut: string

    @ApiProperty({
        description:''
    })
    @Column()
    departamento: string

    @ApiProperty({
        description:''
    })
    @Column()
    area: string

    @ApiProperty({
        description:''
    })
    @Column()
    sub_area: string

    @ApiProperty({
        description:''
    })
    @Column()
    direccion: string

    @ApiProperty({
        description:''
    })
    @Column()
    correo: string

    @ApiProperty({
        description:''
    })
    @Column()
    telefono: string

    @ApiProperty({
        description:''
    })
    @Column()
    cargo: string

    @ApiProperty({
        description:''
    })
    @Column({
        type: 'enum',
        enum: ST,
        default: ST.ACTIVO
    })
    st_persona:ST
}
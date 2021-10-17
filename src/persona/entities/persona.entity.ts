import { ApiProperty} from "@nestjs/swagger";
import { ST } from "src/enums";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('tbl_persona')
export class Persona {
    @ApiProperty({
        description: 'Identificación de la persona',
        type: 'int'
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
    @Column({
        type: 'int',
        nullable: true
    })
    id_institucion: number;

    @ApiProperty({
        description:'Nombre Persona',
        type: 'varchar',
        nullable: false,
        maxLength: 50
    })
    @Column({
        type: 'varchar',
        length: '50'
    })
    nombre: string

    @ApiProperty({
        description:'Rut',
        type: 'varchar',
        nullable: false,
        maxLength: 20
    })
    @Column({
        type: 'varchar',
        nullable: false,
        length: 20
    })
    rut: string

    @ApiProperty({
        description:'Departamento al que pertenece',
        nullable: true,
        type: 'varchar',
        maxLength: 15
    })
    @Column({
        type: 'varchar',
        length: 15,
        default: ''
    })
    departamento: string

    @ApiProperty({
        description:'Area a la que pertenece',
        type: 'varchar',
        nullable: true,
        maxLength: 20
    })
    @Column({
        type:'varchar',
        length: 20,
        default:''
    })
    area: string

    @ApiProperty({
        description:'Sub area a la que pertenece',
        type: 'varchar',
        nullable: true,
        maxLength: 20
    })
    @Column({
        type:'varchar',
        default:'',
        length: 20
    })
    sub_area: string

    @ApiProperty({
        description:'Ubicacion fisica trabajo, numero de oficina',
        type: 'varchar',
        nullable: true,
        maxLength: 50
    })
    @Column({
        type: 'varchar',
        default: '',
        length: 50
    })
    direccion: string

    @ApiProperty({
        description:'Correo electronico',
        nullable: true,
        type: 'varchar',
        maxLength: 50
    })
    @Column({
        type: 'varchar',
        default: '',
        length: 50
    })
    correo: string

    @ApiProperty({
        description:'Telefono de contacto',
        type: 'varchar',
        nullable: true,
        maxLength: 20
    })
    @Column({
        type:'varchar',
        default: '',
        length: 20
    })
    telefono: string

    @ApiProperty({
        description:'Cargo de la persona',
        type: 'varchar',
        nullable: true,
        maxLength:50
    })
    @Column({
        type:'varchar',
        default:'',
        length: 50
    })
    cargo: string

    @ApiProperty({
        description:'Indica si el usuario es visible u oculto',
        type: 'enum',
        enum: ST,
        example: ST.INACTIVO
    })
    @Column({
        type: 'enum',
        enum: ST,
        default: ST.ACTIVO
    })
    st_persona:ST
}
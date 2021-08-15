import { ApiProperty } from "@nestjs/swagger";
import { BOOL } from "src/enums";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('tbl_organizacion')
export class Organizacion{
    @ApiProperty({
        description: 'Identificador de la organizacion',
        type: 'int',
        nullable: false
    })
    @PrimaryGeneratedColumn()
    id_organizacion: number;

    @ApiProperty({
        description:'Nombre de la organización',
        type: 'varchar',
        nullable: false
    })
    @Column({
        type: 'varchar',
        length: 50,
        nullable: false
    })
    nombre: string;

    @ApiProperty({
        description: 'Ubicacion de la institución',
        type: 'varchar',
        default: '',
        maxLength: 200
    })
    @Column({
        type: 'varchar',
        length: 200,
        default: '',
    })
    ubicacion: string;

    @ApiProperty({
        description: 'Descripción de la institución',
        type: 'varchar',
        default: '',
        maxLength: 500
    })
    @Column({
        type: 'varchar',
        length: 500,
        default: ''
    })
    descripcion: string;

    @ApiProperty({
        description: 'Correo principal',
        type: 'varchar',
        uniqueItems: true,
        maxLength: 50
    })
    @Column({
        type:'varchar',
        length: 50,
        nullable: false,
        unique: true
    })
    correo1: string;

    @ApiProperty({
        description: 'Correo alternativo',
        type: 'varchar',
        default: '',
        maxLength: 50
    })
    @Column({
        type: 'varchar',
        length: 50,
        default: ''
    })
    correo2: string;

    @ApiProperty({
        description: 'Telefono principal',
        type: 'varchar',
        nullable: false,
        maxLength: 50
    })
    @Column({
        type: 'varchar',
        length: 50,
        nullable: false,
    })
    telefono1: string;

    @ApiProperty({
        description: 'Telefono Alternativo',
        type: 'varchar',
        default: '',
        maxLength: 50
    })
    @Column({
        type: 'varchar',
        length: 50,
        default: ''
    })
    telefono2: string;

    /* password: string */

    @ApiProperty({
        description: 'Categoria predeterminada',
        type: 'int',
        nullable: true
    })
    @Column({
        type: 'int',
        nullable: true
    })
    id_publico_cate: number;

    @ApiProperty({
        description: 'Subcategoria predeterminada',
        type: 'int',
        nullable: true
    })
    @Column({
        type: 'int',
        nullable: true
    })
    id_publico_cate_sub: number;

    @ApiProperty({
        description: 'Categoria predeterminada',
        type: 'enum',
        enum: BOOL,
        default: BOOL.NO
    })
    @Column({
        type: 'enum',
        enum: BOOL,
        default: BOOL.NO
    })
    auth: BOOL;

    @Column({
        type: 'datetime',
        nullable: false
    })
    fecha_crea: Date


}
import { ApiProperty } from "@nestjs/swagger";
import { BOOL } from "src/enums";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('tbl_plantilla')
export class Plantilla {
    @ApiProperty({
        description: 'Id Plantilla'
    })
    @PrimaryGeneratedColumn()
    id_plantilla: number

    @ApiProperty({
        description: 'Id organizacion asociada',
        type: 'int',
        nullable: false
    })
    @Column({
        type: 'int',
        nullable: false
    })
    id_organizacion: number

    @ApiProperty({
        description: 'Nombre que se le asocia a la plantilla',
        type: 'varchar',
        nullable: false
    })
    @Column({
        type:'varchar',
        length: 100,
        nullable: false
    })
    nombre_plantilla: string

    @ApiProperty({
        description: 'Indica si se debe ser visible el nombre',
        type: 'enum',
        enum: BOOL,
        example: BOOL.NO
    })
    @Column({
        type: 'enum',
        enum: BOOL,
        default: BOOL.NO
    })
    vnombre: BOOL

    @ApiProperty({
        description: 'Indica si se debe ser visible el rut',
        type: 'enum',
        enum: BOOL,
        example: BOOL.NO
    })
    @Column({
        type: 'enum',
        enum: BOOL,
        default: BOOL.NO
    })
    vrut: BOOL

    @ApiProperty({
        description: 'Indica si se debe ser visible el depto',
        type: 'enum',
        enum: BOOL,
        example: BOOL.NO
    })
    @Column({
        type: 'enum',
        enum: BOOL,
        default: BOOL.NO
    })
    vdepto: BOOL

    @ApiProperty({
        description: 'Indica si se debe ser visible el area',
        type: 'enum',
        enum: BOOL,
        example: BOOL.NO
    })
    @Column({
        type: 'enum',
        enum: BOOL,
        default: BOOL.NO
    })
    varea: BOOL

    @ApiProperty({
        description: 'Indica si se debe ser visible la sub area',
        type: 'enum',
        enum: BOOL,
        example: BOOL.NO
    })
    @Column({
        type: 'enum',
        enum: BOOL,
        default: BOOL.NO
    })
    vsub_area: BOOL

    @ApiProperty({
        description: 'Indica si se debe ser visible la dirección',
        type: 'enum',
        enum: BOOL,
        example: BOOL.NO
    })
    @Column({
        type: 'enum',
        enum: BOOL,
        default: BOOL.NO
    })
    vdireccion: BOOL

    @ApiProperty({
        description: 'Indica si se debe ser visible el correo',
        type: 'enum',
        enum: BOOL,
        example: BOOL.NO
    })
    @Column({
        type: 'enum',
        enum: BOOL,
        default: BOOL.NO
    })
    vcorreo: BOOL

    @ApiProperty({
        description: 'Indica si se debe ser visible el telefono',
        type: 'enum',
        enum: BOOL,
        example: BOOL.NO
    })
    @Column({
        type: 'enum',
        enum: BOOL,
        default: BOOL.NO
    })
    vtelefono: BOOL

    @ApiProperty({
        description: 'Indica si se debe ser visible el cargo',
        type: 'enum',
        enum: BOOL,
        example: BOOL.NO
    })
    @Column({
        type: 'enum',
        enum: BOOL,
        default: BOOL.NO
    })
    vcargo: BOOL
}
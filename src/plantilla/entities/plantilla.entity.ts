import { ApiProperty } from "@nestjs/swagger";
import { BOOL } from "src/enums";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('tbl_plantilla')
export class Plantilla {
    @ApiProperty()
    @PrimaryGeneratedColumn()
    id_plantilla: number

    @ApiProperty()
    @Column()
    id_organizacion: number

    @ApiProperty()
    @Column()
    nombre_plantilla: string

    @ApiProperty()
    @Column({
        type: 'enum',
        enum: BOOL,
        default: BOOL.NO
    })
    vnombre: BOOL

    @ApiProperty()
    @Column({
        type: 'enum',
        enum: BOOL,
        default: BOOL.NO
    })
    vrut: BOOL

    @ApiProperty()
    @Column({
        type: 'enum',
        enum: BOOL,
        default: BOOL.NO
    })
    vdepto: BOOL

    @ApiProperty()
    @Column({
        type: 'enum',
        enum: BOOL,
        default: BOOL.NO
    })
    varea: BOOL

    @ApiProperty()
    @Column({
        type: 'enum',
        enum: BOOL,
        default: BOOL.NO
    })
    vsub_area: BOOL

    @ApiProperty()
    @Column({
        type: 'enum',
        enum: BOOL,
        default: BOOL.NO
    })
    vdireccion: BOOL

    @ApiProperty()
    @Column({
        type: 'enum',
        enum: BOOL,
        default: BOOL.NO
    })
    vcorreo: BOOL

    @ApiProperty()
    @Column({
        type: 'enum',
        enum: BOOL,
        default: BOOL.NO
    })
    vtelefono: BOOL

    @ApiProperty()
    @Column({
        type: 'enum',
        enum: BOOL,
        default: BOOL.NO
    })
    vcargo: BOOL


}
import { ApiProperty } from "@nestjs/swagger";
import { BOOL, ST } from "src/enums";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('tbl_publico_aviso')
export class Institucion{

    @ApiProperty({
        description:'Identificador de la institución'
    })
    @PrimaryGeneratedColumn({
        name:'id_publico_aviso'
    })
    id_institucion: number;

    @ApiProperty({
        description: "Identificador del usuario"
    })
    @Column({
        type: 'int',
        nullable: false
    })
    id_usuario: number;

    @ApiProperty({
        description:'Subcategoria que identifica la institucion'
    })
    @Column({
        type: 'int',
        nullable: false
    })
    id_publico_cate_sub: number;

    @ApiProperty({
        description: 'Ciudad donde se ubica la institución'
    })
    @Column({
        type: 'int',
        nullable: false,
    
    })
    id_ciudad: number;
    
    @ApiProperty({
        description: 'Fecha de creación'
    })
    @Column({
        type:'datetime',
        nullable: false
    })
    fecha_crea: Date;

    @ApiProperty({
        description: 'Titulo del aviso'
    })
    @Column({
        name:'titulo_aviso',
        type: 'varchar',
        length: 300,
        collation: 'latin1_swedish_ci',
        nullable:false
    })
    titulo_institucion: string;

    @ApiProperty({
        description: 'Descripción'
    })
    @Column({
        name: 'descripcion_aviso',
        type: 'text',
        collation: 'latin1_swedish_ci',
        nullable: false
    })
    descripcion: string;

    @ApiProperty({
        description: 'Tags del aviso'
    })
    @Column({
        name: 'tags_aviso',
        type: 'varchar',
        length: 300,
        collation: 'latin1_swedish_ci',
        nullable: false
    })
    tags: string;

    @ApiProperty({
        description:'Dirección '
    })
    @Column({
        name:'direccion_aviso',
        type:'varchar',
        length: 200,
        collation: 'latin1_swedish_ci',
        nullable: false
    })
    direccion: string;

    @ApiProperty({
        description: 'Resumen'
    })
    @Column({
        name: 'descripcion_corta',
        type: 'varchar',
        length: 300,
        collation: 'latin_swedish_ci',
        nullable: false
    })
    resumen: string;

    @ApiProperty({
        description: 'Precio'
    })
    @Column({
        name:'precio_aviso',
        type: 'int',
        default: 0
    })
    precio1: number;

    @ApiProperty({
        description: 'Precio'
    })
    @Column({
        name:'precio_aviso_2',
        type: 'int',
        default: 0
    })
    precio2: number;

    @ApiProperty({
        
    })
    @Column({
        type: 'text',
        collation: 'latin1_swedish_ci',
        nullable: false
    })
    google_maps: string;

    @ApiProperty()
    @Column({
        type:'varchar',
        length: 50,
        collation:'latin1:swedish_ci'
    })
    latitud: string;

    @ApiProperty()
    @Column({
        type:'varchar',
        length: 50,
        collation:'latin1:swedish_ci'
    })
    longitud: string;

    @ApiProperty()
    @Column({
        name: 'sitio_web_aviso',
        type: 'varchar',
        length: 150,
        collation: 'latin1_swedish_ci'
    })
    web: string;

    @ApiProperty()
    @Column({
        name:'video_aviso',
        type: 'varchar',
        length: 200,
        collation: 'latin1_swedish_ci'
    })
    video: string;

    @ApiProperty()
    @Column({
        name: 'fono_aviso',
        type: 'varchar',
        length: 100,
        collation: 'latin1_swedish_ci',
        nullable: false    
    })
    telefono1: string;

    @ApiProperty()
    @Column({
        name: 'celu_aviso',
        type: 'varchar',
        length: 100,
        collation: 'latin1_swedish_ci',
        default:''
    })
    telefono2: string;

    @ApiProperty()
    @Column({
        name: 'email_aviso',
        type: 'varchar',
        length: 255,
        collation: 'latin1_swedish_ci',
        nullable: false
    })
    email1: string;

    @ApiProperty()
    @Column({
        name: 'email_aviso_2',
        type: 'varchar',
        length: 50,
        collation: 'latin1_swedish_ci',
        default:''
    })
    email2: string;

    @ApiProperty()
    @Column({
        type: 'varchar',
        length: 200,
        collation: 'latin1_swedish_ci',
        nullable: false
    })
    horario_atencion: string;

    @ApiProperty()
    @Column({
        type: 'enum',
        enum: BOOL,
        default: BOOL.NO
    })
    geoposicion: BOOL;

    @ApiProperty()
    @Column({
        name: 'destacado_aviso',
        type: 'enum',
        enum: BOOL,
        default: BOOL.NO
    })
    destacar: BOOL;

    @ApiProperty()
    @Column({
        type: 'date',
        default: null,
    })
    fecha_destacado: Date;

    @ApiProperty()
    @Column({
        type: 'varchar',
        length: 200,
        collation: 'latin1_swedish_ci'
    })
    twitter: string;

    @ApiProperty()
    @Column({
        type: 'varchar',
        length: 200,
        collation: 'latin1_swedish_ci'
    })
    facebook: string;

    @ApiProperty()
    @Column({
        name: 'st_publico_aviso',
        type:'enum',
        enum: ST,
        default: ST.ACTIVO,
        collation:'latin1_swedish_ci',
        nullable:false       
    })
    st_institucion: ST;

    @ApiProperty()
    @Column({
        type: 'int',
        nullable: true,
    })
    id_organizacion: number;

    @ApiProperty()
    @Column({
        type: 'int',
        nullable: true,
    })
    id_plantilla: number;

    @ApiProperty()
    @Column({
        type: 'int',
        default:0
    })
    errores: number;


}
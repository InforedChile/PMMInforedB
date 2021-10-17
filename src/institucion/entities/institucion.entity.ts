import { ApiProperty } from "@nestjs/swagger";
import { BOOL, ST } from "src/enums";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('tbl_publico_aviso')
export class Institucion{

    @ApiProperty({
        description:'Identificador de la institución',
        type: 'int'
    })
    @PrimaryGeneratedColumn({
        name:'id_publico_aviso'
    })
    id_institucion: number;

    @ApiProperty({
        description: "Identificador del usuario",
        type: 'int',
        
    })
    @Column({
        type: 'int',
        nullable: false,
        default: 0 // se deja en 0 puesto que no se comprende su rol.
    })
    id_usuario: number;

    @ApiProperty({
        description:'Id de la subcategoria que identifica la institucion',
        type: 'int'
    })
    @Column({
        type: 'int',
        nullable: false
    })
    id_publico_cate_sub: number;

    @ApiProperty({
        description: 'Id de la ciudad donde se ubica la institución',
        type: 'int'
    })
    @Column({
        type: 'int',
        nullable: false,
    
    })
    id_ciudad: number;
    
    @ApiProperty({
        description: 'Fecha de creación',
        type: 'datetime'
    })
    @Column({
        type:'datetime',
        nullable: false
    })
    fecha_crea: Date;

    @ApiProperty({
        description: 'Titulo del aviso',
        type:'varchar',
        maxLength: 300,
        nullable: false
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
        description: 'Descripción',
        type: 'text',
        nullable: false
    })
    @Column({
        name: 'descripcion_aviso',
        type: 'text',
        collation: 'latin1_swedish_ci',
        nullable: false
    })
    descripcion: string;

    @ApiProperty({
        description: 'Tags del aviso',
        type: 'varchar'
    })
    @Column({
        name: 'tags_aviso',
        type: 'varchar',
        length: 300,
        collation: 'latin1_swedish_ci',
        default: ''
    })
    tags: string; // podria asignarse automatico, si no ver como lo asigna infored

    @ApiProperty({
        description:'Dirección ',
        type: 'varchar',
        maxLength: 200,
        default: ''
    })
    @Column({
        name:'direccion_aviso',
        type:'varchar',
        length: 200,
        collation: 'latin1_swedish_ci',
        nullable: false,
        default: ''
    })
    direccion: string;

    @ApiProperty({
        description: 'Resumen',
        type: 'varchar',
        maxLength: 200

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
        description: 'Precio',
        type: 'int'
    })
    @Column({
        name:'precio_aviso',
        type: 'int',
        default: 0
    })
    precio1: number;

    @ApiProperty({
        description: 'Precio',
        type: 'int'
    })
    @Column({
        name:'precio_aviso_2',
        type: 'int',
        default: 0
    })
    precio2: number;

    @ApiProperty({
        description: '??',
        type: 'text',
        default: ''
    })
    @Column({
        type: 'text',
        collation: 'latin1_swedish_ci',
        nullable: false
    })
    google_maps: string;

    @ApiProperty({
        description:'Latitud',
        type:'varchar',
        maxLength: 50,
        default: ''
    })
    @Column({
        type:'varchar',
        length: 50,
        collation:'latin1_swedish_ci',
        default: ''
    })
    latitud: string;

    @ApiProperty({
        description: 'Longitud',
        type: 'text',
        maxLength:50,
        default: ''
    })
    @Column({
        type:'varchar',
        length: 50,
        collation:'latin1_swedish_ci',
        default: ''
    })
    longitud: string;

    @ApiProperty({
        description: 'Pagina web del aviso',
        type: 'varchar',
        nullable: false
    })
    @Column({
        name: 'sitio_web_aviso',
        type: 'varchar',
        length: 150,
        collation: 'latin1_swedish_ci',
        default: ''
    })
    web: string;

    @ApiProperty({
        description: 'Video del aviso',
        type: 'varchar',
        default:''
    })
    @Column({
        name:'video_aviso',
        type: 'varchar',
        length: 200,
        collation: 'latin1_swedish_ci',
        default: ''
    })
    video: string;

    @ApiProperty({
        description: 'Telefono 1',
        type: 'text',
        example: '+56XXXXXXXXX',
        nullable: false
    })
    @Column({
        name: 'fono_aviso',
        type: 'varchar',
        length: 100,
        collation: 'latin1_swedish_ci',
        nullable: false    
    })
    telefono1: string;

    @ApiProperty({
        description: 'Telefono 2',
        type: 'varchar',
        default: '',
        example: '+56XXXXXXXXX'
    })
    @Column({
        name: 'celu_aviso',
        type: 'varchar',
        length: 100,
        collation: 'latin1_swedish_ci',
        default:''
    })
    telefono2: string;

    @ApiProperty({
        description: 'Correo Electronico 1',
        type: 'varchar',
        maxLength: 255,
        nullable: false
    })
    @Column({
        name: 'email1_aviso',
        type: 'varchar',
        length: 255,
        collation: 'latin1_swedish_ci',
        nullable: false
    })
    email1: string;

    @ApiProperty({
        description: 'Correo Electronico 2',
        type: 'varchar',
        maxLength: 50, // no se pq =(,
        default: ''
    })
    @Column({
        name: 'email2_aviso',
        type: 'varchar',
        length: 50,
        collation: 'latin1_swedish_ci',
        default:''
    })
    email2: string;

    @ApiProperty({
        description: 'Horario de Atención',
        type: 'varchar',
        maxLength: 200
    })
    @Column({
        type: 'varchar',
        length: 200,
        collation: 'latin1_swedish_ci',
        nullable: false
    })
    horario_atencion: string;

    @ApiProperty({
        description: 'Geo Posicion',
        enum: BOOL,
        default: BOOL.NO
    })
    @Column({
        type: 'enum',
        enum: BOOL,
        default: BOOL.NO
    })
    geoposicion: BOOL;

    @ApiProperty({
        description: 'Destacado Aviso',
        enum: BOOL,
        default: BOOL.NO
    })
    @Column({
        name: 'destacado_aviso',
        type: 'enum',
        enum: BOOL,
        default: BOOL.NO
    })
    destacar: BOOL;

    @ApiProperty({
        description: 'Fecha destacado',
        type: 'date'
    })
    @Column({
        type: 'datetime',
        default: null
    })
    fecha_destacado: Date;

    @ApiProperty()
    @Column({
        type: 'varchar',
        length: 200,
        collation: 'latin1_swedish_ci',
        default: ''
    })
    twitter: string;

    @ApiProperty()
    @Column({
        type: 'varchar',
        length: 200,
        collation: 'latin1_swedish_ci',
        default: ''
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

    @ApiProperty()
    @Column({
        type: 'varchar',
        default: '',
        length: 500
    })
    observaciones: string;


}
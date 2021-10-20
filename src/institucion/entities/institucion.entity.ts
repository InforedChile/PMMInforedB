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
        type:'datetime'
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
        //collation: 'latin1_swedish_ci',
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
        //collation: 'latin1_swedish_ci',
        nullable: false
    })
    descripcion: string;

    @ApiProperty({
        description: 'Tags del aviso',
        type: 'varchar',
        nullable: true,
    })
    @Column({
        name: 'tags_aviso',
        type: 'varchar',
        length: 300,
        //collation: 'latin1_swedish_ci',
        default: ''
    })
    tags: string; // Discrepa con infored ..

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
        //collation: 'latin1_swedish_ci',
        default: ''
    })
    direccion: string; // Discrepa con infored ..

    @ApiProperty({
        description: 'Resumen',
        type: 'varchar',
        maxLength: 200
    })
    @Column({
        name: 'descripcion_corta',
        type: 'varchar',
        length: 300,
        //collation: 'latin_swedish_ci',
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
    precio1: number; // Discrepa con infored ..

    @ApiProperty({
        description: 'Precio',
        type: 'int'
    })
    @Column({
        name:'precio_aviso_2',
        type: 'int',
        default: 0
    })
    precio2: number; // Discrepa con infored ..

    @ApiProperty({
        description: '??',
        type: 'text',
        default: ''
    })
    @Column({
        type: 'text',
        //collation: 'latin1_swedish_ci',
        default: null
    })
    google_maps: string; // Discrepa con infored ..

    @ApiProperty({
        description:'Latitud',
        type:'varchar',
        maxLength: 50,
        default: ''
    })
    @Column({
        type:'varchar',
        length: 50,
        //collation:'latin1_swedish_ci',
        default: ''
    })
    latitud: string; // Discrepa con infored ..

    @ApiProperty({
        description: 'Longitud',
        type: 'varchar',
        maxLength:50,
        default: ''
    })
    @Column({
        type:'varchar',
        length: 50,
        //collation:'latin1_swedish_ci',
        default: ''
    })
    longitud: string; // Discrepa con infored ..

    @ApiProperty({
        description: 'Pagina web del aviso',
        type: 'varchar',
        nullable: false,
        maxLength: 150
    })
    @Column({
        name: 'sitio_web_aviso',
        type: 'varchar',
        length: 150,
        collation: 'latin1_swedish_ci',
        default: ''
    })
    web: string; // Discrepa con infored ..

    @ApiProperty({
        description: 'Video del aviso',
        type: 'varchar',
        default:'',
        maxLength: 200
    })
    @Column({
        name:'video_aviso',
        type: 'varchar',
        length: 200,
        //collation: 'latin1_swedish_ci',
        default: ''
    })
    video: string; // Discrepa con infored ..

    @ApiProperty({
        description: 'Telefono 1',
        type: 'varchar',
        example: '+56XXXXXXXXX',
        nullable: false,
        maxLength: 150
    })
    @Column({
        name: 'fono_aviso',
        type: 'varchar',
        length: 100,
        //collation: 'latin1_swedish_ci',
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
        //collation: 'latin1_swedish_ci',
        default:''
    })
    telefono2: string; // Discrepa con infored ..

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
        //collation: 'latin1_swedish_ci',
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
        //collation: 'latin1_swedish_ci',
        default:''
    })
    email2: string; // Discrepa con infored ..

    @ApiProperty({
        description: 'Horario de Atención',
        type: 'varchar',
        maxLength: 200
    })
    @Column({
        type: 'varchar',
        length: 200,
        //collation: 'latin1_swedish_ci',
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
    fecha_destacado: Date; // Discrepa con infored ..

    @ApiProperty({
        description: 'Twitter de la institución',
        nullable: true,
        maxLength: 200
    })
    @Column({
        type: 'varchar',
        length: 200,
        //collation: 'latin1_swedish_ci',
        default: ''
    })
    twitter: string; // Discrepa con infored ..

    @ApiProperty({
        description: 'Facebook de la institución',
        nullable: true,
        type: 'varchar',
        maxLength: 200,
    })
    @Column({
        type: 'varchar',
        length: 200,
        //collation: 'latin1_swedish_ci',
        default: ''
    })
    facebook: string; // Discrepa con infored ..

    @ApiProperty({
        description: 'Indica el estado de la institución si activo o no',
        type: 'enum',
        enum: ST,
        example: ST.ACTIVO,
        nullable: true
    })
    @Column({
        name: 'st_publico_aviso',
        type:'enum',
        enum: ST,
        default: ST.ACTIVO,
        collation:'latin1_swedish_ci'      
    })
    st_institucion: ST;

    @ApiProperty({
        description: 'Indica la organización administradora',
        type: 'int',
        nullable: true
    })
    @Column({
        type: 'int',
        nullable: true,
    })
    id_organizacion: number; // Se agrega

    @ApiProperty({
        description: 'Indica la plantilla utilizada para la visualización de los datos de personas',
        type: 'int',
        nullable: true
    })
    @Column({
        type: 'int',
        nullable: true,
    })
    id_plantilla: number; // Se agrega

    @ApiProperty({
        description: 'Indica numero de veces que el aviso fue marcado como erroneo, sobre 10 se pasa a inactivo',
        type: 'int',
        nullable: true
    })
    @Column({
        type: 'int',
        default:0
    })
    errores: number; // Se agrega

    @ApiProperty({
        description: 'Observaciones de ultimo momento',
        type: 'varchar',
        maxLength: 500,
        nullable: true
    })
    @Column({
        type: 'varchar',
        default: '',
        length: 500
    })
    observaciones: string; // Se agrega


}
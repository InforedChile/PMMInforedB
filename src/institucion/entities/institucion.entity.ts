import { BOOL, ST } from "src/enums";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('tbl_publico_aviso')
export class Institucion{

    @PrimaryGeneratedColumn({
        name:'id_publico_aviso'
    })
    id_institucion: number;

    @Column({
        type: 'int',
        nullable: false
    })
    id_usuario: number;

    @Column({
        type: 'int',
        nullable: false
    })
    id_publico_cate_sub: number;

    @Column({
        type:'datetime',
        nullable: false
    })
    fecha_crea: Date;

    @Column({
        name:'titulo_aviso',
        type: 'varchar',
        length: 300,
        collation: 'latin1_swedish_ci',
        nullable:false
    })
    titulo_institucion: string;

    @Column({
        name: 'descripcion_aviso',
        type: 'text',
        collation: 'latin1_swedish_ci',
        nullable: false
    })
    descripcion: string;

    @Column({
        name: 'tags_aviso',
        type: 'varchar',
        length: 300,
        collation: 'latin1_swedish_ci',
        nullable: false
    })
    tags: string;

    @Column({
        name:'direccion_aviso',
        type:'varchar',
        length: 200,
        collation: 'latin1_swedish_ci',
        nullable: false
    })
    direccion: string;

    @Column({
        name: 'descripcion_corta',
        type: 'varchar',
        length: 300,
        collation: 'latin_swedish_ci',
        nullable: false
    })
    resumen: string;

    @Column({
        name:'precio_aviso',
        type: 'int',
        default: 0
    })
    precio1: number;

    @Column({
        name:'precio_aviso_2',
        type: 'int',
        default: 0
    })
    precio2: number;

    @Column({
        type: 'text',
        collation: 'latin1_swedish_ci',
        nullable: false
    })
    google_maps: string;

    @Column({
        type:'varchar',
        length: 50,
        collation:'latin1:swedish_ci'
    })
    latitud: string;

    @Column({
        type:'varchar',
        length: 50,
        collation:'latin1:swedish_ci'
    })
    longitud: string;

    @Column({
        name: 'sitio_web_aviso',
        type: 'varchar',
        length: 150,
        collation: 'latin1_swedish_ci'
    })
    web: string;

    @Column({
        name:'video_aviso',
        type: 'varchar',
        length: 200,
        collation: 'latin1_swedish_ci'
    })
    video: string;

    @Column({
        name: 'fono_aviso',
        type: 'varchar',
        length: 100,
        collation: 'latin1_swedish_ci',
        nullable: false    
    })
    telefono1: string;

    @Column({
        name: 'celu_aviso',
        type: 'varchar',
        length: 100,
        collation: 'latin1_swedish_ci'
    })
    telefono2: string;

    @Column({
        name: 'email_aviso',
        type: 'varchar',
        length: 255,
        collation: 'latin1_swedish_ci',
        nullable: false
    })
    email1: string;

    @Column({
        name: 'email_aviso_2',
        type: 'varchar',
        length: 50,
        collation: 'latin1_swedish_ci'
    })
    email2: string;

    @Column({
        type: 'varchar',
        length: 200,
        collation: 'latin1_swedish_ci',
        nullable: false
    })
    horario_atencion: string;

    @Column({
        type: 'enum',
        enum: BOOL,
        default: BOOL.NO
    })
    geoposicion: BOOL;

    @Column({
        name: 'destacado_aviso',
        type: 'enum',
        enum: BOOL,
        default: BOOL.NO
    })
    destacar: BOOL;

    @Column({
        type: 'date'
    })
    fecha_destacado: Date;

    @Column({
        type: 'varchar',
        length: 200,
        collation: 'latin1_swedish_ci'
    })
    twitter: string;

    @Column({
        type: 'varchar',
        length: 200,
        collation: 'latin1_swedish_ci'
    })
    facebook: string;

    @Column({
        name: 'st_publico_aviso',
        type:'enum',
        enum: ST,
        default: ST.ACTIVO,
        collation:'latin1_swedish_ci',
        nullable:false       
    })
    st_institucion: ST;


}
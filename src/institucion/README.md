# Modulo Institucion

## Schemas

Institucion :{

    id_institucion: number

    id_usuario: number

    id_publico_cate_sub: number

    id_ciudad: number

    fecha_crea: string($date-time)

    titulo_institucion: string

    descripcion: string

    tags: string

    direccion: string

    resumen: string

    precio1: number

    precio2: number

    google_maps: string
    
    latitud: string
    
    longitud: string
    
    web: string
    
    video: string
    
    telefono1: string
    
    telefono2: string
    
    email1: string
    
    email2: string
    
    horario_atencion: string
    
    geoposicion: string
    
    destacar: string
    
    fecha_destacado: string($date-time)
    
    twitter: string
    
    facebook: string
    
    st_institucion: string
    
    id_organizacion: number
    
    id_plantilla: number
    
    errores: number

}

CreateInstitucionDTO :{
    
    id_usuario: number
    
    id_publico_cate_sub: number
    
    id_ciudad: number
    
    titulo_institucion: string
    
    descripcion: string
    
    tags: string
    
    direccion: string
    
    resumen:  string
    
    precio1: number
    
    precio2: number
    
    google_maps: string
    
    latitud: string
    
    longitud: string
    
    web: string
    
    video: string
    
    telefono1: string
    
    telefono2: string
    
    email1: string
    
    email2: string
    
    horario_atencion: string
    
    geoposicion: string
    
    twitter: string
    
    facebook: string
    
    id_organizacion: number
    
    id_plantilla: number

}

EditInstitucionDTO :{
    
    id_usuario: number
    
    id_publico_cate_sub: number
    
    id_ciudad: number
    
    titulo_institucion: string
    
    descripcion: string
    
    tags: string
    
    direccion: string
    
    resumen: string
    
    precio1: number
    
    precio2: number
    
    google_maps: string
    
    latitud: string
    
    longitud: string
    
    web: string
    
    video: string
    
    telefono1: string
    
    telefono2: string
    
    email1: string
    
    email2: string
    
    horario_atencion: string
    
    geoposicion: string
    
    twitter: string
    
    facebook: string
    
    id_organizacion: number
    
    id_plantilla: number
    
    destacar: string
    
    st_institucion: string
    
    errores: number

}


## Rutas ('/inst/')

|        | Ruta                              | Params                                | Body                 | Return             | Función                                                    |
|--------|-----------------------------------|---------------------------------------|----------------------|--------------------|------------------------------------------------------------|
| GET    | ""                                |                                       |                      | Lista(Institucion) | Entrega todas las instituciones registradas                |
| GET    | "ver/{id}"                        | id:Id Organizacion                    |                      | Institucion        | Busca una institucion segun su ID                          |
| GET    | "filtrar/org/{idOrg}"             | idCate: Id Organizacion               |                      | Lista(Institucion) | Filtra las instituciones según la organizacion asociada    |
| GET    | "filtrar/org/{idOrg}/estado/{st}" | idCate: Id Organizacion ; st: Estado  |                      | Lista(Institucion) | Filtra las instituciones segun su organizacion y su estado |
| POST   | "add"                             |                                       | CreateInstitucionDTO | Institucion        | Crea una nueva institucion                                 |
| PUT    | "edit/{id}"                       | id: Id Institucion                    | EditInstitucionDTO   | Institucion        | Edita una institucion existente                            |
| DELETE | "delete/{id}"                     | id: Id Institucion                    |                      | Institucion        | Elimina una institucion existente                          |

## Observaciones

* Falta verificar existencia de organizacion, subcategoria y ciudad 
* Faltan verificaciones metodo post 
* Falta definir metodo para verificar existencia



#Modulo Organización

## Schemas

Organizacion :{

    id_organizacion: number //Identificador de la organizacion
    
    nombre: string // Nombre de la organización
    
    ubicacion: string // Ubicacion de la institución
    
    descripcion: string // Descripción de la institución
    
    correo1: string // Correo principal
    
    correo2: string // Correo alternativo
    
    telefono1: string // Telefono principal
    
    telefono2: string // Telefono Alternativo
    
    id_publico_cate: string // Categoria predeterminada
    
    id_publico_cate_sub: string // Subcategoria predeterminada
    
    auth: Enum("si","no") // Categoria predeterminada
}

CreateOrgDTO{
    
    nombre: string
    
    ubicacion: string
    
    descripcion: string

    correo1: string
    
    correo2: string
    
    telefono1: string
    
    telefono2: string
    
    id_publico_cate: number
    
    id_publico_cate_sub: number

}

EditOrgDTO{
    
    nombre: string
    
    ubicacion: string
    
    descripcion: string
    
    correo1: string
    
    correo2: string
    
    telefono1: string
    
    telefono2: string
    
    id_publico_cate: number
    
    id_publico_cate_sub: number
    
    auth: Enum("si","no")
}



## Rutas ('/org/')

|        | Ruta                  | Params                     | Body         | Return              | Función                                   |
|--------|-----------------------|----------------------------|--------------|---------------------|-------------------------------------------|
| GET    | ""                    |                            |              | Lista(Organización) | Entrega todas las categorias registradas  |
| GET    | "ver/{id}"            | id:Id Organizacion         |              | Organización        | Busca una organización segun su ID        |
| GET    | "filtrar/auth/{bool}" | st: Estado de Organizacion |              | Lista(Organización) | Filtra las organizaciones según su estado |
| POST   | "add"                 |                            | CreateOrgDTO | Organización        | Crea una nueva organización               |
| PUT    | "edit/{id}"           | id: Id Organizacion        | EditOrgDTO   | Organizacion        | Edita una organizacion existente          |
| DELETE | "delete/{id}"         | id: Id Organizacion        |              | Organizacion        | Elimina una organizacion existente        |

## Observaciones
* Modulo propuesto por equipo
* Falta verificacion de datos.
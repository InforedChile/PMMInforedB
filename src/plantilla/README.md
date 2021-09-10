# Modulo Plantilla

## Schemas

Plantilla{
    
    id_plantilla: number
    
    id_organizacion: number
    
    nombre_plantilla: string
    
    vnombre: string
    
    vrut: string
    
    vdepto: string
    
    varea: string
    
    vsub_area: string
    
    vdireccion: string
    
    vcorreo: string
    
    vtelefono: string
    
    vcargo: string
}

CreatePlantillaDTO :{
    
    id_plantilla: number
    
    id_organizacion: number
    
    nombre_plantilla: string
    
    vnombre: string
    
    vrut: string
    
    vdepto: string
    
    varea: string
    
    vsub_area: string
    
    vdireccion: string
    
    vcorreo: string
    
    vtelefono: string
    
    vcargo: string
}

EditPlantillaDTO :{
    
    id_plantilla: number
    
    id_organizacion: number
    
    nombre_plantilla: string
    
    vnombre: string
    
    vrut: string
    
    vdepto: string
    
    varea: string
    
    vsub_area: string
    
    vdireccion: string
    
    vcorreo: string
    
    vtelefono: string
    
    vcargo: string
}



## Rutas ('/plantilla/')

|        | Ruta                  | Params                 | Body             | Return           | Función                                              |
|--------|-----------------------|------------------------|------------------|------------------|------------------------------------------------------|
| GET    | ""                    |                        |                  | Lista(Plantilla) | Entrega todas las plantillas registradas             |
| GET    | "ver/{id}"            | id:Id Plantilla        |                  | Plantilla        | Busca una plantilla segun su ID                      |
| GET    | "filtrar/org/{idOrg}" | idOrg: Id Organización |                  | Lista(Plantilla) | Filtra las plantillas según la organización asociada |
| POST   | "add"                 |                        | CreatePersonaDTO | Plantilla        | Crea una nueva plantilla                             |
| PUT    | "edit/{id}"           | id: Id Plantilla       | EditPersonaDTO   | Plantilla        | Edita una plantilla existente                        |
| DELETE | "delete/{id}"         | id: Id Plantilla       |                  | Plantilla        | Elimina una plantilla existente                      |

## Observaciones
* Modulo propuesto por el equipo
* Faltan Verificaciones y documentar
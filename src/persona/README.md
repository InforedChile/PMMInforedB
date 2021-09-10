#Modulo Persona

## Schemas

Persona{

id_persona:	number \\ Identificacion de la persona

id_organizacion: number \\ Id de la organizacion asociada

id_institucion: number \\ Identificador de la institucion asociada

nombre: string

rut: string

departamento: string

area: string

sub_area: string

direccion: string

correo: string

telefono: string

cargo: string

st_persona: string

}

CreatePersonaDTO{

id_organizacion: number

id_institucion: number

nombre: string

rut: string

departamento: string

area: string

sub_area: string

direccion: string

correo: string

telefono: string

cargo: string

st_persona: string

}

EditPersonaDTO{
    
id_organizacion: number

id_institucion: number

nombre: string

rut: string

departamento: string

area: string

sub_area: string

direccion: string

correo: string

telefono: string

cargo: string

st_persona: string

}






## Rutas ('/dir/')

|        | Ruta                               | Params                              | Body             | Return         | Función                                               |
|--------|------------------------------------|-------------------------------------|------------------|----------------|-------------------------------------------------------|
| GET    | ""                                 |                                     |                  | Lista(Persona) | Entrega todas las personas registradas                |
| GET    | "ver/{id}"                         | id:Id Persona                       |                  | Persona        | Busca una persona segun su ID                         |
| GET    | "filtrar/org/{idOrg}"              | idOrg: Id Organización              |                  | Lista(Persona) | Filtra las personas según la organización asociada    |
| GET    | "filtrar/inst/idInt"               | idInt: Id Institución               |                  | Lista(Persona) | Filtra las personas según la institución asociada     |
| GET    | "filtrar/org/{idOrg}/estado/{st}"  | idOrg: Id Organización ; st: Estado |                  | Lista(Persona) | Filtra las personas según su organización y su estado |
| GET    | "filtrar/inst/{idInt}/estado/{st}" | idInt: Id Institución ; st: Estado  |                  | Lista(Persona) | Filtra las personas según su institución y su estado  |
| POST   | "add"                              |                                     | CreatePersonaDTO | Persona        | Crea una nueva persona                                |
| PUT    | "edit/{id}"                        | id: Id Persona                      | EditPersonaDTO   | Persona        | Edita una persona existente                           |
| DELETE | "delete/{id}"                      | id: Id Persona                      |                  | Persona        | Elimina una persona existente                         |


## Observaciones

* Tabla propuesta por el equipo
* Falta verificacion de datos y documentacion.

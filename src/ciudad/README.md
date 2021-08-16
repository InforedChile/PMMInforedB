# Modulo Ciudad

## Schemas

Ciudad: {
    id_ciudad: number // Identificador de la ciudad
    nombre_ciudad: string // Nombre de la ciudad
    id_region: number // Region donde se ubica
    st_ciudad: Enum:[ activo, inactivo ] // Indica si la ciudad esta activa o no
}

## Rutas ('/ciudad/')

| Metodo HTTP | Ruta                               | Params                               | Body | Return         | Función                                          |
|-------------|------------------------------------|--------------------------------------|------|----------------|--------------------------------------------------|
| GET         | ""                                 |                                      |      | Lista(Ciudad) | Entrega todas las ciudades registradas           |
| GET         | "ver/{id}"                         | id:Id Ciudad                         |      | Ciudad         | Busca una ciudad segun su ID                     |
| GET         | "filtrar/region/{id}"              | id: Id Región                        |      | Lista(Ciudad) | Filtra las ciudades segun su region              |
| GET         | "/filtrar/reg/{idReg}/estado/{st}" | idReg: Id Region ; st: Estado Region |      | Lista(Ciudad) | Filtra las ciudades segun su region y su estado  |
| GET         | "/filtrar/st/{st}"                 | st: Estado Region                    |      | Lista(Ciudad) | Filtran las ciudades segun su estado             |

## Observaciones
* No se implementan metodos 'Post', 'Put' y 'Delete', puesto que no se considera parte del proyecto las modificaciones de la tabla de ciudades.
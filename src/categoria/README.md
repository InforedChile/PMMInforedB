#Modulo Categoria

## Schemas

Categoria: {

    id_publico_cate: number // Identificador de categoria

    nombre_publico_cate: string // Nombre de categoria

    imagen: string // Imagen a ser mostrada

    orden: number // (??)

    st_publico_cate: Enum[ activo, inactivo ] // Indica si la categoria es visible o no
}

## Rutas ('/cat/')

| Metodo HTTP | Ruta              | Params                  | Body | Return           | Función                                  |
|-------------|-------------------|-------------------------|------|------------------|------------------------------------------|
| GET         | ""                |                         |      | Lista(Categoria) | Entrega todas las categorias registradas |
| GET         | "ver/{id}"        | id:Id Categoria         |      | Categoria        | Busca una categoria segun su ID          |
| GET         | "filtrar/st/{st}" | st: Estado de Categoria |      | Lista(Categoria) | Filtra las categorias segun su estado    |

## Observaciones
* Se considera que no se pueden sugerir nuevas categorias
* No se implementa 'Post', 'Put' y 'Delete', puesto que se considera que solamente va a ser una tabla de consultas.
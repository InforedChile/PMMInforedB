# Modulo SubCategoria

## Schemas

Subcategoria :{

    id_publico_cate_sub: number
    
    id_publico_cate: number
    
    nombre_publico_cate_sub: string
    
    imagen: string
    
    st_publico_cate_sub: string

}

CreateSubcategoriaDTO :{

    id_publico_cate_sub: number
    
    id_publico_cate: number
    
    nombre_publico_cate_sub: string
    
    imagen: string
    
}

EditSubcategoriaDTO :{

    id_publico_cate_sub: number
    
    id_publico_cate: number
    
    nombre_publico_cate_sub: string
    
    imagen: string
    
    st_publico_cate_sub: string

}


## Rutas ('/subcategoria/')

|        | Ruta                                | Params                             | Body                  | Return              | Función                                                 |
|--------|-------------------------------------|------------------------------------|-----------------------|---------------------|---------------------------------------------------------|
| GET    | ""                                  |                                    |                       | Lista(Subcategoria) | Entrega todas las subcategorias registradas             |
| GET    | "ver/{id}"                          | id:Id Subcategoria                 |                       | Subcategoria        | Busca una subcategoria segun su ID                      |
| GET    | "filtrar/cate/{idCate}"             | idCate: Id Categoria               |                       | Lista(Subcategoria) | Filtra las subcategorias según la categoria asociada    |
| GET    | "filtrar/cate/{idCate}/estado/{st}" | idCate: Id Categoria ; st: Estado  |                       | Lista(Subcategoria) | Filtra las subcategorias segun su categoria y su estado |
| POST   | "add"                               |                                    | CreateSubcategoriaDTO | Subcategoria        | Crea una nueva subcategoria                                |
| PUT    | "edit/{id}"                         | id: Id SubCategoria                | EditSubcategoriaDTO   | Subcategoria        | Edita una subcategoria existente                           |
| DELETE | "delete/{id}"                       | id: Id SubCategoria                |                       | Subcategoria        | Elimina una subcategoria existente                         |

## Observaciones
* Falta hacer verificaciones, algunos metodos requieren variables de sesion.
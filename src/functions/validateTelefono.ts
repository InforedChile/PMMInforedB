export function validarTelefono(telefono:string):[boolean,string]{
    if(telefono.substring(0,3) !== '+56') return [false,"Formato del telefono invalido, formato correcto +56xxxxxxx"]
    for(let i = 3; i < telefono.length; i++){
        if(!"0123456789".includes(telefono[i])) return [false,"Telefono deben ser solo numeros" ]  
    }
    return[true,"Telefono valido"]
}
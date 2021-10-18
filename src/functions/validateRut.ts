export function validarRut(rut:string):[boolean,string]{
    const [values,verificador]= rut.split('-')
    let mul=2
    let sum = 0 ;
    for(let i = values.length-1; i >= 0 ;i--){
        
        if(mul > 7) mul = 2 ;
        if(!"0123456789".includes(values[i])) return [false,"Rut solo pueden ser numeros"];
        sum = sum + mul * Number(values[i])
        mul=mul+1
    }
    let ver =11 - sum % 11
    if(ver === 11 ) ver = 0;
    if( ver === 10) {
        if('k'.includes(verificador)) return [true,''] ;
        return [false,"Digito verificador erroneo"]; 
    }

    return [ver.toString().includes(verificador),"Digito verificador erroneo"]

}
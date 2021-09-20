export function validateRut(rut:string):boolean{
    const arrayRut= rut.replace('.','').split('-')
    const valores=arrayRut[0]
    const ver=arrayRut[1]

    
    return true 
}
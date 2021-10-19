export function validarCoord(coor):[boolean,string]{
    let pcont = 0
    let gcont = 0
    
    for(let i =0; i<coor.length;i++){
        if(!'-.0123456789'.includes(coor[i])) return [false,'Hay un parametro no valido en la coordenada']
        if('.'===coor[i]) pcont++;
        if('-'===coor[i]) gcont++;
    }
    if(pcont > 1) return [false,"Formato invalido"];
    if(gcont > 1) return [false, "Formato invalido"];
    if((gcont === 1) && (coor[0] !== '-')) return [false, 'Gión solo puede ir al principio']
    return[true,'']


}
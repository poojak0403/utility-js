
const head = (list) => {
    
    if(list == null || list === undefined || list == '') 
        return null;
    else{
        return list[0];
    }   
}

const tail = (list) => {
    
    if(list == null || list === undefined || list == '') 
        return null;
    else{
        return list.slice(1);
    }   
}
module.exports = {head , tail};
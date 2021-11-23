
const head = (list) => {
    
    if(list == null || list === undefined || list == '') 
        return null;
    else{
        return list[0];
    }   
}

const tail = (list) => {
    
    if(list == null || list === undefined || list == '') 
        return [];
    else{
        return list.slice(1);
    }   
}

const map = (map,fun) => {
    if(map == null || map === undefined || map == '') 
        return [];
    else{
        switch (fun) {
            case 'cube':
              cube = (x) => (x * x * x);
              map=map.map(cube)
              break;
            case 'identity':
                identity = (x) => x;
                map=map.map(identity);
              break;
    }
    return map;
}
}

const filter = (list, expression) => {
    
    if(list == null || list === undefined || list == '') 
        return [];
    else{
        return list.filter(expression);
    }
    
}

module.exports = {head , tail, map, filter};
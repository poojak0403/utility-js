const collectionFunction = require('./function');
describe('Head',()=>{
    
    it('Head( [1,2,3]) should be 1',() =>{
        expect(collectionFunction.head([1,2,3])).toEqual(1);
    })

    it('Head([]) should be null or undefined',() =>{
        expect(collectionFunction.head([])).toEqual(null);
    })

})

describe('tail',()=>{

    it('tail([1,2,3]) should be [2,3]',() =>{
        expect(collectionFunction.tail([1,2,3])).toEqual([2,3]);
    })

    it('tail([]) should be []',() =>{
        expect(collectionFunction.tail([])).toEqual([]);
    })
})

describe('map',()=>{

    it('map([], cube) should give []',() =>{
        expect(collectionFunction.map([], 'cube')).toEqual([]);
    })

    it('map([1,2,3], identity) should give [1,2,3]',() =>{
        expect(collectionFunction.map([1,2,3], 'identity')).toEqual([1,2,3]);
    })
    
    it('map([1,2,3], cube) should give [1,8,27]',() =>{
        expect(collectionFunction.map([1,2,3], 'cube')).toEqual([1,8,27]);
    })
})

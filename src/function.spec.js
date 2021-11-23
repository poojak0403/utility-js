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

    // todo fix below test 
    // it('map([a{x : 10}],someObject => someObject.x + 1)',() => {
    //     expect(collectionFunction.map([a{x : 10}],someObject => someObject.x + 1)).toEqual([1,8,27]);
    // })
})

describe('filter',()=>{

    it('filter([], x => true) should be []',() =>{
        expect(collectionFunction.filter([], x => true)).toEqual([]);
    })

    it('filter([], x => true) should be [1,2,3]',() =>{
        expect(collectionFunction.filter([1,2,3], x => true)).toEqual([1,2,3]);
    })

    it('filter([], x => false) should be []',() =>{
        expect(collectionFunction.filter([1,2,3], x => false)).toEqual([]);
    })

    it('filter([1,2,3],x => x > 1) should give [2,3]',() =>{
        expect(collectionFunction.filter([1,2,3], x => x > 1)).toEqual([2,3]);
    })

})

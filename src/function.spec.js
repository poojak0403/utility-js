const collectionFunction = require('./function');
describe('Head',()=>{
    
    it('Head should be null',() =>{
        expect(collectionFunction.head([])).toEqual(null);
    })

    it('Head should be 1',() =>{
        expect(collectionFunction.head([1,2,3])).toEqual(1);
    })

    it('tail should [2,3]]',() =>{
        expect(collectionFunction.tail([1,2,3])).toEqual([2,3]);
    })
})

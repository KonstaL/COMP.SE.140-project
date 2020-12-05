import chunk from "../comp.se.200-lib/src/chunk.js";

describe('chunk function', () => {
    test('Chunk should split array in two', () => {
        const a = ['a', 'b', 'c', 'd'];
        const b = 2;
        const expectedResult = [['a', 'b'], ['c', 'd']];
        
        expect(chunk(a, b)).toEqual(expectedResult);
    });

    test('Chunk if length not possible', () => {
        const a = ['a', 'b', 'c'];
        const b = 2;
        const expectedResult = [['a', 'b'], ['c']];
        
        expect(chunk(a, b)).toEqual(expectedResult);
    }); 

    
    test('Chunk with size of 0', () => {
        const a = ['a', 'b', 'c'];
        const b = 0;
        const expectedResult = [];
        
        expect(chunk(a, b)).toEqual(expectedResult);
    });


    test('Chunk with no size arg', () => {
        const a = ['a', 'b'];
        const expectedResult = a;
        
        expect(chunk(a)).toEqual(expectedResult);
    });

    test('Chunk with null', () => {
        const a = null;
        const expectedResult = [];
        
        expect(chunk(a)).toEqual(expectedResult);
    });
});

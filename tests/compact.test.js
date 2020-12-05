import compact from "../comp.se.200-lib/src/compact.js";

describe('compact function', () => {
    test('Compact should remove unwanted characters', () => {
        const a = [false, 1, null, 0, 'a', "", undefined, 2, NaN];
        const expectedResult = [a[1], a[4], a[7]];
        
        // (5.12) Bug. Returns  [ 'a', 2, '-1': 1 ]: 
        expect(compact(a)).toEqual(expectedResult);
    });

    test('Compact should throw error', () => {
        const a = 2
        const expectedResult = [];
        const fnCall = () => compact(a);
        expect(fnCall).toThrow();
    });     
});

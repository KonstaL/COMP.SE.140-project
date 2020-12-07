import difference from "../comp.se.200-lib/src/difference.js";

describe('difference fn', () => {
    test('difference should return array size of one when only there is one value difference', () => {
        const a = [1,2,4];
        const b = [1,2,3];
        const expectedResult = [4];
        
        expect(difference(a,b)).toEqual(expectedResult);
    });

    test('difference should return array size of one when only there is one value difference', () => {
        const a = [1,2,3];
        const b = [1];
        const c = [2];
        const d = [3];
        const expectedResult = [];
        
        expect(difference(a,b,c,d)).toEqual([expectedResult]);
    });


    test('difference null handling', () => {
        const a = null;
        const b = [1,2,3];
        const expectedResult = [];
        
        expect(difference(a, b)).toEqual([expectedResult]);
    });
});

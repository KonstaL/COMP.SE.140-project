import  at from "../comp.se.200-lib/src/at.js";

describe('at function', () => {
    test('At with simple object and string as path', () => {
        const a = {a: 1};
        const b = 'a';
        const expectedResult = [1];
        const result = at(a,b);
        
        for (let i = 0; i < result.length; i++) {
            expect(result[i]).toBe(expectedResult[i]);
        }
    });

    test('At with simple object and array as path', () => {
        const a = {a: [ {b: {c: 1} }, 2]};
        const b = ["a[0].b.c", "a[1]"];
        const expectedResult = [1, 2];
        const result = at(a,b);

        for (let i = 0; i < result.length; i++) {
            expect(result[i]).toBe(expectedResult[i]);
        }
    });
});

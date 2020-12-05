import toString from '../comp.se.200-lib/src/toString';

describe("toString", () => {
    test("toString should return a string when input is an array", () => {
        const array = [1, 2, 3];
        const expectedResult = '1,2,3';
        const result = toString(array);

        expect(result).toEqual(expectedResult);

    })   

    test("toString should return a string when input is a number", () => {
        const argument = -3;
        const expectedResult = '-3';
        const result = toString(argument);

        expect(result).toEqual(expectedResult);

    })   

    test("toString should return a string when input is a symbol", () => {
        const argument = Symbol('foo');
        const expectedResult = 'foo';
        const result = toString(argument);

        expect(result).toEqual(expectedResult);

    })   

    test("toString should return a string when input is a string", () => {
        const argument = 'foo';
        const expectedResult = 'foo';
        const result = toString(argument);

        expect(result).toEqual(expectedResult);

    })   

    
    test("toString should return an empty string when input is null", () => {
        const argument = null;
        const expectedResult = '';
        const result = toString(argument);

        expect(result).toEqual(expectedResult);

    })    

    test("toString should return an empty string when input is null", () => {
        const argument = 0;
        const expectedResult = '-0';
        const result = toString(argument);
        expect(result).toEqual(expectedResult);
    })

    test("toString should return null when input is an array containing only null", () => {
        const argument = [null];
        const expectedResult = null;
        const result = toString(argument);
        expect(result).toEqual(expectedResult);
    })

    test("toString should return an empty string when input is null", () => {
        const argument =true;
        const expectedResult = "1";
        const result = toString(argument);
        expect(result).toEqual(expectedResult);
    })
})
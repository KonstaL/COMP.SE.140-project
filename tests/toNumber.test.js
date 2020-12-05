import toNumber from '../comp.se.200-lib/src/toNumber';

describe("toNumber function", () => {
    test("toNumber should return a number when input is a string", () => {
        const argument = '5.5';
        const expectedResult = 5.5;
        const result = toNumber(argument);
        expect(result).toEqual(expectedResult);
    })

    test("toNumber should return NaN when input is a symbol", () => {
        const argument = Symbol('5.5');
        const result = toNumber(argument);
        expect(result).toBeNaN();
    })


    test("toNumber should return number when input is a number", () => {
        const argument = 5.5;
        const expectedResult = 5.5;
        const result = toNumber(argument);
        expect(result).toEqual(expectedResult);
    })

    test("toNumber should return NaN when input is a function", () => {
        const argument = ()=> {return 5.5};
        const result = toNumber(argument);
        expect(result).toBeNaN();
    })

    test("toNumber should return number when input is an object holding a number", () => {
        const argument = Object(1);
        const expectedResult = 1;
        const result = toNumber(argument);
        expect(result).toEqual(expectedResult);;
    })
})
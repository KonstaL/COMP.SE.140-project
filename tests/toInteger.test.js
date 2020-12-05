import toInteger from '../comp.se.200-lib/src/toInteger';

describe("toInteger function", () => {
    test("Should convert decimal value to integer", () => {
        const input = 3.2;
        const expectedValue = 3;
        const result = toInteger(input);
        expect(result).toEqual(expectedValue);
    })

    test("Should convert string value to integer", () => {
        const input = '3.2';
        const expectedValue = 3;
        const result = toInteger(input);
        expect(result).toEqual(expectedValue);
    })

})
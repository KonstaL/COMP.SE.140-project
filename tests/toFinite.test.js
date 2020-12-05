import toFinite from '../comp.se.200-lib/src/toFinite';

describe("toFinite function", () => {
    test("Should return biggest integer when input is infinity", () => {
        const input = 1 / 0;
        const expectedValue = Number.MAX_VALUE;
        const result = toFinite(input);
        expect(result).toEqual(expectedValue);
    })
    test("Should return minus biggest integer when input is -infinity", () => {
        const input = -1 / 0;
        const expectedValue = -Number.MAX_VALUE;
        const result = toFinite(input);
        expect(result).toEqual(expectedValue);
    })

    test("Should return input value if input is finite", () => {
        const input = '2.4';
        const expectedValue = 2.4;
        const result = toFinite(input);
        expect(result).toEqual(expectedValue);
    })
    test("Should return 0 value if input is 0", () => {
        const input = 0;
        const expectedValue = 0;
        const result = toFinite(input);
        expect(result).toEqual(expectedValue);
    })

    test("Should return 0  if input is false", () => {
        const input = undefined;
        const expectedValue = 0;
        const result = toFinite(input);
        expect(result).toEqual(expectedValue);
    })

})
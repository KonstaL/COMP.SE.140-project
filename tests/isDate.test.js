import isDate from '../comp.se.200-lib/src/isDate';

describe("isDate function", () => {
    test("isDate should return true if argument is a date", () => {
        const a = new Date();
        const result = isDate(a);
        expect(result).toBe(true);
    })

    test("isDate should return true if argument is a Object(date)", () => {
        const a = Object(new Date());
        const result = isDate(a);
        expect(result).toBe(true);
    })
    
    test("isDate should return false if argument is not a date object", () => {
        const a = '2020-10-18';
        const result = isDate(a);
        expect(result).toBe(false);
    })
})
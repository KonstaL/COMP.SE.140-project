import isBoolean from '../comp.se.200-lib/src/isBoolean';

describe("isBoolean function", () => {
    test("isBoolean should return true when argument is a boolean", () => {
        const a = true;
        const result = isBoolean(a);
        expect(result).toBe(true);
    })

    test("isBoolean should return true when argument is a boolean", () => {
        const a = false;
        const result = isBoolean(a);
        expect(result).toBe(true);
    })

    test("isBoolean should return true when argument is a boolean object", () => {
        const a = new Boolean(false);
        const result = isBoolean(a);
        expect(result).toBe(true);
    })

    test("isBoolean should return false when argument is not a boolean", () => {
        const a = 1;
        const result = isBoolean(a);
        expect(result).toBe(false);
    })

    
})
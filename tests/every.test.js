import every from '../comp.se.200-lib/src/every';

describe("every function", () => {
    test("every should return true if all elements passes predicate", () => {
        const array = [2, 4, 6];
        const predicate = (x) => x % 2 === 0;
        const result = every(array, predicate);
        expect(result).toBe(true)
    })

    test("every should return false if any element doesn't pass predicate", () => {
        const array = [1, 'a', false];
        const predicate = Boolean;
        const result = every(array, predicate);
        expect(result).toBe(false)
    })
})
import isArrayLike from '../comp.se.200-lib/src/isArrayLike';

describe("isArrayLike function", () => {
    
    test("isArrayLike should return true when input is an array", () => {
        const a = [1, 2, 3];
        const result = isArrayLike(a);
        expect(result).toBe(true);
    })    
    
    test("isArrayLike should return true when input is a string", () => {
        const a = "asd";
        const result = isArrayLike(a);
        expect(result).toBe(true);
    })
    
    test("isArrayLike should return false when input is a function", () => {
        const a = () => 1;
        const result = isArrayLike(a);
        expect(result).toBe(false);
    })                
    
    test("isArrayLike should return false when input is an object with setted negative length", () => {
        const a ={length: -1};
        const result = isArrayLike(a);
        expect(result).toBe(false);
    })            
})
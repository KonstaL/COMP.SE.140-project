import isArguments from '../comp.se.200-lib/src/isArguments';

describe("isArguments function", () => {
    
    test("isArguments should return true when input is a function", () => {
        const a = () => 1;
        const result = isArguments(a);
        expect(result).toBe(true);
    })                
    
    test("isArguments should return false when input is a fun", () => {
        const a = [1, 2, 3];
        const result = isArguments(a);
        expect(result).toBe(false);
    })        
})
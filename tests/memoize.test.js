import memoize from '../comp.se.200-lib/src/memoize';

describe("memeoize function", () => {
    test("Memoize should hold values that function returned", () => {
        const obj = {'a': 1};
        const f = () => obj.a;
        const vals = memoize(f);
        expect(vals()).toEqual(1);
        obj.a = 2;
        expect(vals()).toEqual(1);
        
    })

    test("Memoize should throw an error if input isn't function", () => {
        const obj = {'a': 1};
        const f =  obj.a;
        const vals = memoize(f);
        expect(vals).toThrow(TypeError)        
    })

})
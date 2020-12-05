import keys from '../comp.se.200-lib/src/keys';

describe("keys function", () => {
    test("keys should return array of keys from arraylike object", () => {
        const a = [1, 2, 3];
        const expectedResult = ['0', '1', '2'];
        const result = keys(a);

        expect(result).toEqual(expectedResult);
    })


    test("keys should return array of keys from object", () => {
        function Foo() {
            this.a = 1;
            this.b = 1;
        }
        const expectedResult = ['a', 'b'];
        const result = keys(new Foo);

        expect(result).toEqual(expectedResult);
    })

})
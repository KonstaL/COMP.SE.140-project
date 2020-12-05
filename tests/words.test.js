import words from '../comp.se.200-lib/src/words';

describe("words function", () => {
    test("Words with simple input string", () => {
        const string = 'this is a string';
        const expectedResult = ['this', 'is', 'a', 'string'];
        const result = words(string);
        expect(result).toEqual(expect.arrayContaining(expectedResult));
    })

    test("Words with simple input string and defined pattern", () => {
        const string = 'this is & a string';
        const expectedResult = ['this', 'is', '&', 'a', 'string'];
        const pattern = /[^,]+/g
        const result = words(string, pattern);
        expect(result).toEqual(expect.arrayContaining(expectedResult));
    })

    test("Words with input that has ascii characters", () => {
        const string = 'this is an ascii %';
        const expectedResult = ['this', 'is', 'an', 'ascii'];
        const result = words(string);
        expect(result).toEqual(expect.arrayContaining(expectedResult));
        
    })


    test("Words with an empty string as input", () => {
        const string = '';
        const expectedResult = [];
        const result = words(string);
        expect(result).toEqual(expectedResult);
        
    })


    test("Words with an empty string and pattern as an input", () => {
        const string = '';
        const expectedResult = [];
        const pattern = /[.]+/g
        const result = words(string, pattern);
        expect(result).toEqual(expect.arrayContaining(expectedResult));
    })
})
import countBy from "../comp.se.200-lib/src/countBy.js";

describe('countBy function', () => {
    test('countBy should return object created object', () => {
        const a = [
            { "user": "user1", "active": true },
            { "user": "user2", "active": false },
            { "user": "user3", "active": true },
            { "user": "user4", "active": true } 
        ];
        const fn = (val) => val.active
        const expectedResult = {'true':3, 'false':1};
        
        expect(countBy(a, fn)).toEqual(expectedResult);
    });
});

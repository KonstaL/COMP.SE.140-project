import divide from "../comp.se.200-lib/src/divide.js";

describe('divide fn', () => {
    test('divide should return correct quotient', () => {
        const dividend = -2.5;
        const divisor = 2.5;
        const expectedResult = 1;
        
        expect(divide(dividend, divisor)).toEqual(expectedResult);
    });

    test('divide should throw error when divisor=0', () => {
        const dividend = 3;
        const divisor = 0;
        const fnCall = () => divide(dividendt, divisor);
        
        expect(fnCall).toThrow();
    });
});

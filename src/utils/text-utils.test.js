const { upper } = require('./text-utils');

const cases = [['Tobias', 'TOBIAS'], ['', ''], [null, null], ['TOBIAS', 'TOBIAS'], ['tObias', 'TOBIAS']];

describe('upper should put all to uppercase', () => {
    test.each(cases)(
        "given %p as argument, returns %p",
        async (name, expectedName) => {
            const result = await upper(name)
            expect(result).toBe(expectedName)
        }
    )
})
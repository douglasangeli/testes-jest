const { helloFor } = require('./hello-service');

jest.mock('../utils/text-utils')
const utils = require('../utils/text-utils')

test('helloFor to return expected message', async () => {
    // Arrange
    const name = 'Tobias'
    const expectedGreetings = 'Hello World for Arnaldo'
    utils.upper.mockImplementation(() => Promise.resolve('Arnaldo'))
    // Act
    const result = await helloFor(name)
    // Assert
    expect(result).toBe(expectedGreetings)
})
const parseArguments = require('../src/parseArguments');
describe('parseArguments', () => {
    test('should return default parsedArguments if no additional arguments are provided', () => {
        const argv = ['node', 'index.js'];
        const result = parseArguments(argv);
        expect(result).toEqual({ count: false, filterOn: '' });
    });
    test('should correctly parse filter argument', () => {
        const argv = ['node', 'index.js', '--filter=example'];
        const result = parseArguments(argv);
        expect(result).toEqual({ count: false, filterOn: 'example' });
    });
    test('should correctly parse count argument', () => {
        const argv = ['node', 'index.js', '--count'];
        const result = parseArguments(argv);
        expect(result).toEqual({ count: true, filterOn: '' });
    });
    test('should correctly parse both filter and count arguments', () => {
        const argv = ['node', 'index.js', '--filter=example', '--count'];
        const result = parseArguments(argv);
        expect(result).toEqual({ count: true, filterOn: 'example' });
    });
});
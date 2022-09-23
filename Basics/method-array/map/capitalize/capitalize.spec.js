const { capitalizeAll } = require('./capitalize');

describe('capitalizeAll()', () => {
    it('should return empty string', () =>{
        expect(capitalizeAll('')).toEqual('');
    });

    it('should work for single-letter words', () => {
        expect(capitalizeAll('a b c')).toEqual('A B C');
    });

    it('should work for two-or-more words', () => {
        expect(capitalizeAll('hello world')).toEqual('Hello World');
    });
});
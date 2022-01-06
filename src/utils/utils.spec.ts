import { expect } from 'chai';
import { replaceAll } from './utils';

describe('utils', () => {
  describe('replaceAll', () => {
    it('should do nothing with an empty input string', () => {
      const actual = replaceAll('', '{test}', 'real');
      const expected = '';
      expect(actual).to.equal(expected);
    });

    it('should replace a substring with one occurrence', () => {
      const actual = replaceAll('This is a {test} string', '{test}', 'real');
      const expected = 'This is a real string';
      expect(actual).to.equal(expected);
    });

    it('should replace a substring with more than one occurrence', () => {
      const actual = replaceAll('This {test} is a {test} string', '{test}', 'real');
      const expected = 'This real is a real string';
      expect(actual).to.equal(expected);
    });

    it('should replace a substring which is the entire string', () => {
      const actual = replaceAll('{test}', '{test}', 'real');
      const expected = 'real';
      expect(actual).to.equal(expected);
    });

    it('should replace a substring with one occurrence at the beginning', () => {
      const actual = replaceAll('{test} is a string', '{test}', 'real');
      const expected = 'real is a string';
      expect(actual).to.equal(expected);
    });

    it('should replace a substring with one occurrence at the end', () => {
      const actual = replaceAll('This is a {test}', '{test}', 'real');
      const expected = 'This is a real';
      expect(actual).to.equal(expected);
    });

    it('should return the same string when the search matches the replace', () => {
      const actual = replaceAll('This is a {test}', '{test}', '{test}');
      const expected = 'This is a {test}';
      expect(actual).to.equal(expected);
    });
  });
});

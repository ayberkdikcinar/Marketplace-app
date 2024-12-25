import { describe, it, expect } from 'vitest';
import toCamelCase from '../toCamelCase';

describe('toCamelCase', () => {
  it('should convert a single word to camel case', () => {
    expect(toCamelCase('hello')).toBe('Hello');
  });

  it('should convert multiple words to camel case', () => {
    expect(toCamelCase('hello world')).toBe('Hello World');
  });
});

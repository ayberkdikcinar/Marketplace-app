import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import LocalStorageService from '../localStorage';

describe('LocalStorageService', () => {
  const key = 'testKey';
  const value = { name: 'John Doe', age: 30 };

  beforeEach(() => {
    localStorage.clear();
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('should set and get an item from localStorage', () => {
    LocalStorageService.setItem(key, value);
    const retrievedValue = LocalStorageService.getItem<typeof value>(key);
    expect(retrievedValue).toEqual(value);
  });

  it('should return null for non-existing key', () => {
    const retrievedValue = LocalStorageService.getItem<typeof value>('nonExistingKey');
    expect(retrievedValue).toBeNull();
  });

  it('should remove an item from localStorage', () => {
    LocalStorageService.setItem(key, value);
    LocalStorageService.removeItem(key);
    const retrievedValue = LocalStorageService.getItem<typeof value>(key);
    expect(retrievedValue).toBeNull();
  });

  it('should clear all items from localStorage', () => {
    LocalStorageService.setItem(key, value);
    LocalStorageService.setItem('anotherKey', { data: 'test' });
    LocalStorageService.clear();
    expect(localStorage.length).toBe(0);
  });
});

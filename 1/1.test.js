const { test, expect } = require('@jest/globals')
const firstTask = require('./1')

describe('firstTask function', () => {
    test('number of squares of even numbers', () => {
        expect(firstTask(5, [2, 3, 4, 8, 1])).toBe(3);
    });
    
    test('number of squares of even numbers', () => {
        expect(firstTask(10, [8, 8, 1, 4, 3, 2, 9, 10, 2, 5])).toBe(6);
    });
    
    test('number of squares of even numbers', () => {
        expect(firstTask()).toEqual(0);
    });
})

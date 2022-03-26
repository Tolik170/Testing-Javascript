const { test, expect } = require('@jest/globals');
const secondTask = require('./2')

describe('secondTask function', () => {
    test('All three-digit numbers whose sum of digits is equal to 25.', () => {
        expect(secondTask(25)).toStrictEqual([799, 889, 898, 979, 988, 997]);
    });


    test('All three-digit numbers whose sum of digits is equal to 4.', () => {
        expect(secondTask(4)).toStrictEqual([103, 112, 121, 130, 202, 211, 220, 301, 310, 400]);
    });

    test('All three-digit numbers whose sum of digits is equal to 4.', () => {
        expect(secondTask(0)).toStrictEqual([]);
    });
})



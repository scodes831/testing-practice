const analyzeArray = require('./analyzeArray');

const expected = {
    average: 3,
    min: 1,
    max: 6,
    length: 4
}

test('array of positive numbers', () => {
    expect(analyzeArray([3, 2, 1, 6])).toMatchObject(expected);
});

const expected2 = {
    average: 3,
    min: -2,
    max: 13,
    length: 7
}

test('array that contains a negative number', () => {
    expect(analyzeArray([-2, 1, 0, 10, 13, 0, -1])).toMatchObject(expected2);
})


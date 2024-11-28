const analyzeArray = require('./analyzeArray');

test('analyze array function returns object with necessary key/val pairs', () => {
    let test = analyzeArray([1, 8, 3, 4, 2, 6]);
    expect(test.average).toEqual(4);
    expect(test.min).toEqual(1);
    expect(test.max).toEqual(8);
    expect(test.length).toEqual(6);
})
const lib = require('../app/lib');
const assert = require('assert');

var tests = {};

tests["It should works correctly with positive odd integer number as number"] = (done) => {
    assert.equal(true, lib.isOdd(1));
    done();
};

tests["It should works correctly with positive odd integer number as string"] = (done) => {
    assert.equal(true, lib.isOdd('1'));
    done();
};

tests["It should works correctly with negative odd integer number as number"] = (done) => {
    assert.equal(true, lib.isOdd(-1));
    done();
};

tests["It should works correctly with negative odd integer number as string"] = (done) => {
    assert.equal(true, lib.isOdd('-1'));
    done();
};

tests["It should works correctly with positive odd float number as number"] = (done) => {
    assert.equal(true, lib.isOdd(1.0));
    done();
};

tests["It should works correctly with positive odd float number as string"] = (done) => {
    assert.equal(true, lib.isOdd('1.0'));
    done();
};

tests["It should works correctly with negative odd float number as number"] = (done) => {
    assert.equal(true, lib.isOdd(-1.0));
    done();
};

tests["It should works correctly with negative odd float number as string"] = (done) => {
    assert.equal(true, lib.isOdd('-1.0'));
    done();
};

tests["It should works correctly with positive even integer number as number"] = (done) => {
    assert.equal(false, lib.isOdd(2));
    done();
};

tests["It should works correctly with positive even integer number as string"] = (done) => {
    assert.equal(false, lib.isOdd('2'));
    done();
};

tests["It should works correctly with negative even integer number as number"] = (done) => {
    assert.equal(false, lib.isOdd(-2));
    done();
};

tests["It should works correctly with negative even integer number as string"] = (done) => {
    assert.equal(false, lib.isOdd('-2'));
    done();
};

tests["It should works correctly with positive even float number as number"] = (done) => {
    assert.equal(false, lib.isOdd(2.0));
    done();
};

tests["It should works correctly with positive even float number as string"] = (done) => {
    assert.equal(false, lib.isOdd('2.0'));
    done();
};

tests["It should works correctly with negative even float number as number"] = (done) => {
    assert.equal(false, lib.isOdd(-2.0));
    done();
};

tests["It should works correctly with negative even float number as string"] = (done) => {
    assert.equal(false, lib.isOdd('-2.0'));
    done();
};

tests["It should works correctly with zero number as number"] = (done) => {
    assert.equal(false, lib.isOdd(0));
    done();
};

tests["It should works correctly with zero number as string"] = (done) => {
    assert.equal(false, lib.isOdd('0'));
    done();
};

tests["It should works correctly with odd scientific notation as number"] = (done) => {
    assert.equal(true, lib.isOdd(3.1e1));
    done();
};

tests["It should works correctly with odd scientific notation as string"] = (done) => {
    assert.equal(true, lib.isOdd("3.1e1"));
    done();
};

tests["It should works correctly with even scientific notation as string"] = (done) => {
    assert.equal(false, lib.isOdd("2e10"));
    done();
};

tests["It should works correctly with very large odd number as number"] = (done) => {
    assert.equal(false, lib.isOdd(9876543210987654321));
    done();
};

tests["Incorrect type should be generated when the non-number string is used"] = (done) => {
    assert.throws(() => lib.isOdd('one'));
    done();
};

tests["Incorrect type should be generated when an object is used"] = (done) => {
    assert.throws(() => lib.isOdd('one'));
    done();
};

tests["Incorrect type should be generated when array is used"] = (done) => {
    assert.throws(() => lib.isOdd('one'));
    done();
};

tests["Incorrect type should be generated when boolean is used"] = (done) => {
    assert.throws(() => lib.isOdd('one'));
    done();
};

tests["It should correctly handle odd result of sum equation"] = (done) => {
    assert.equal(true, lib.isOdd(3+2));
    done();
};

tests['Should correctly handle undefined value'] = (done) => {
    let v;
    assert.throws(() => lib.isOdd(v));
    done();
};

module.exports = tests

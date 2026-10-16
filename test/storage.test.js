const assert = require('node:assert/strict');
const test = require('node:test');

const { readStoredArray } = require('../js/script');

function createStorage(initialValue) {
    let value = initialValue;
    let removeCalls = 0;

    return {
        getItem() {
            return value;
        },
        removeItem() {
            value = null;
            removeCalls += 1;
        },
        get removeCalls() {
            return removeCalls;
        }
    };
}

test('returns a stored array without modifying storage', () => {
    const storage = createStorage('[{"id":"pc-1"}]');

    assert.deepEqual(readStoredArray(storage, 'cartItems'), [{ id: 'pc-1' }]);
    assert.equal(storage.removeCalls, 0);
});

test('returns an empty array when the key is missing', () => {
    const storage = createStorage(null);

    assert.deepEqual(readStoredArray(storage, 'cartItems'), []);
    assert.equal(storage.removeCalls, 0);
});

test('removes malformed JSON instead of throwing', () => {
    const storage = createStorage('{not valid JSON');
    let result;

    assert.doesNotThrow(() => {
        result = readStoredArray(storage, 'cartItems');
    });
    assert.deepEqual(result, []);
    assert.equal(storage.removeCalls, 1);
});

test('removes valid JSON with an unexpected shape', () => {
    const storage = createStorage('{"id":"pc-1"}');

    assert.deepEqual(readStoredArray(storage, 'cartItems'), []);
    assert.equal(storage.removeCalls, 1);
});

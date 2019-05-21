const {hh, hh2, hh3} = require('./index');
const assert = require('assert')

it('hh', () => {
	assert.equal(hh([5, 3, 0, 2, 6, 2, 0, 7, 2, 5]), false);
	assert.equal(hh([4, 2, 0, 1, 5, 0]), false);
	assert.equal(hh([3, 1, 2, 3, 1, 0]), true);
	assert.equal(hh([16, 9, 9, 15, 9, 7, 9, 11, 17, 11, 4, 9, 12, 14, 14, 12, 17, 0, 3, 16]), true);
	assert.equal(hh([14, 10, 17, 13, 4, 8, 6, 7, 13, 13, 17, 18, 8, 17, 2, 14, 6, 4, 7, 12]), true);
	assert.equal(hh([15, 18, 6, 13, 12, 4, 4, 14, 1, 6, 18, 2, 6, 16, 0, 9, 10, 7, 12, 3]), false);
	assert.equal(hh([6, 0, 10, 10, 10, 5, 8, 3, 0, 14, 16, 2, 13, 1, 2, 13, 6, 15, 5, 1]), false);
	assert.equal(hh([2, 2, 0]), false);
	assert.equal(hh([3, 2, 1]), false);
	assert.equal(hh([1, 1]), true);
	assert.equal(hh([1]), false);
	assert.equal(hh([]), true);
});
it('hh2', () => {
	assert.equal(hh2([5, 3, 0, 2, 6, 2, 0, 7, 2, 5]), false);
	assert.equal(hh2([4, 2, 0, 1, 5, 0]), false);
	assert.equal(hh2([3, 1, 2, 3, 1, 0]), true);
	assert.equal(hh2([16, 9, 9, 15, 9, 7, 9, 11, 17, 11, 4, 9, 12, 14, 14, 12, 17, 0, 3, 16]), true);
	assert.equal(hh2([14, 10, 17, 13, 4, 8, 6, 7, 13, 13, 17, 18, 8, 17, 2, 14, 6, 4, 7, 12]), true);
	assert.equal(hh2([15, 18, 6, 13, 12, 4, 4, 14, 1, 6, 18, 2, 6, 16, 0, 9, 10, 7, 12, 3]), false);
	assert.equal(hh2([6, 0, 10, 10, 10, 5, 8, 3, 0, 14, 16, 2, 13, 1, 2, 13, 6, 15, 5, 1]), false);
	assert.equal(hh2([2, 2, 0]), false);
	assert.equal(hh2([3, 2, 1]), false);
	assert.equal(hh2([1, 1]), true);
	assert.equal(hh2([1]), false);
	assert.equal(hh2([]), true);
});
it('hh3', () => {
	assert.equal(hh3([5, 3, 0, 2, 6, 2, 0, 7, 2, 5]), false);
	assert.equal(hh3([4, 2, 0, 1, 5, 0]), false);
	assert.equal(hh3([3, 1, 2, 3, 1, 0]), true);
	assert.equal(hh3([16, 9, 9, 15, 9, 7, 9, 11, 17, 11, 4, 9, 12, 14, 14, 12, 17, 0, 3, 16]), true);
	assert.equal(hh3([14, 10, 17, 13, 4, 8, 6, 7, 13, 13, 17, 18, 8, 17, 2, 14, 6, 4, 7, 12]), true);
	assert.equal(hh3([15, 18, 6, 13, 12, 4, 4, 14, 1, 6, 18, 2, 6, 16, 0, 9, 10, 7, 12, 3]), false);
	assert.equal(hh3([6, 0, 10, 10, 10, 5, 8, 3, 0, 14, 16, 2, 13, 1, 2, 13, 6, 15, 5, 1]), false);
	assert.equal(hh3([2, 2, 0]), false);
	assert.equal(hh3([3, 2, 1]), false);
	assert.equal(hh3([1, 1]), true);
	assert.equal(hh3([1]), false);
	assert.equal(hh3([]), true);
});
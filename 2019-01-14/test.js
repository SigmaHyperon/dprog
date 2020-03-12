const {balanced, balanced_bonus} = require('./index');
const assert = require('assert');
it('balanced', () => {
	assert.equal(balanced("xxxyyy"), true);
	assert.equal(balanced("yyyxxx"), true);
	assert.equal(balanced("xxxyyyy"), false);
	assert.equal(balanced("yyxyxxyxxyyyyxxxyxyx"), true);
	assert.equal(balanced("xyxxxxyyyxyxxyxxyy"), false);
	assert.equal(balanced(""), true);
	assert.equal(balanced("x"), false);
});

it('balanced_bonus', () => {
	assert.equal(balanced_bonus("xxxyyyzzz"), true);
	assert.equal(balanced_bonus("abccbaabccba"), true);
	assert.equal(balanced_bonus("xxxyyyzzzz"), false);
	assert.equal(balanced_bonus("abcdefghijklmnopqrstuvwxyz"), true);
	assert.equal(balanced_bonus("pqq"), false);
	assert.equal(balanced_bonus("fdedfdeffeddefeeeefddf"), false);
	assert.equal(balanced_bonus("www"), true);
	assert.equal(balanced_bonus("x"), true);
	assert.equal(balanced_bonus(""), true);
});
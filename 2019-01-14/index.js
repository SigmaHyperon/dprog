function balanced(i){
	return [...i].reduce((acc, v) => acc + (v == 'x' ? 1 : v == 'y' ? -1 : 0), 0) == 0;
}
function balanced_bonus(i){
	return [...new Set(i)].map(v => [...i].filter(c => c === v).length).every((v,i,a) => v == a[0]);
}
module.exports = {balanced, balanced_bonus};
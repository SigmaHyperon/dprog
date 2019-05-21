const {max, floor} = Math;
const permutate = arr => arr.length === 1 ? [arr] : arr
  .map((el, idx) => ({el, values: [...arr.slice(0, idx), ...arr.slice(idx + 1)]}))
  .map(({el, values}) => permutate(values).map(permutation => [el, ...permutation]))
  .reduce((acc, permutations) => acc.concat(permutations), []);
  
function fit1(X, Y, x, y){
	return floor(X/x)*floor(Y/y);
}
function fit2(X, Y, x, y){
	return max(fit1(X, Y, y, x), fit1(X, Y, x, y));
}
function fit3(X, Y, Z, x, y, z){
	function fit(X, Y, Z, x, y, z){
		return floor(X/x)*floor(Y/y)*floor(Z/z);
	}
	return max(fit(X, Y, Z, x, y, z), fit(X, Y, Z, x, z, y), fit(X, Y, Z, y, x, z), fit(X, Y, Z, y, z, x), fit(X, Y, Z, z, y, x), fit(X, Y, Z, z, x, y));
}

const fitn = (A, a) => max(...permutate(a).map(b=>A.map((v,i)=>floor(v/b[i])).reduce((a,c)=>a*c,1)));

module.exports = {fit1, fit2, fit3, fitn};
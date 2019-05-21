const removeZeros = i => i.filter( v => v != 0);
const sortDesc = i => i.sort( (a,b) => b - a );
const lengthCheck = (l, i) => l > i.length;
const frontElimination = (n, i) => i.map( v => n-- > 0 ? v - 1 : v);

function hh(input){
	const withoutZeros = removeZeros(input);
	if (withoutZeros.length == 0) return true;
	const sorted = sortDesc(withoutZeros);
	const [first, ...remainder] = sorted;
	const isIncorrectLength = lengthCheck(first, remainder);
	if (isIncorrectLength) return false;
	return hh(frontElimination(first, remainder));
}

function hh2(i){
	const w = i.filter(v => v != 0);
	if(w.length == 0) return true;
	let [f, ...r] = w.sort((a,b) => b-a);
	if(f > r.length) return false;
	return hh2(r.map(v => f-- > 0 ? v-1 : v));
}

console.log(hh2([3, 1, 2, 3, 1, 0]));
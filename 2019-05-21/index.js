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
	const [f, ...r] = i.filter(v => v > 0).sort((a,b) => b-a);
	if(f == undefined) return true;
	if(f > r.length) return false;
	return hh2(r.map((v,i) => f > i ? v-1 : v));
}

let h=(i)=>{let[f,...r]=i.filter(v=>v>0).sort((a,b)=>b-a);return f==null?true:f>r.length?false:h(r.map((v,i)=>f>i?v-1:v));}

module.exports = {hh, hh2, hh3};
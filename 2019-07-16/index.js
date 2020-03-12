brackets = [{end:10000,rate:0},{end:30000,rate:0.1},{end:100000,rate:0.25},{end:Infinity,rate:0.4}];

const getDeltaBrackets = b => b.map((v, i, a) => typeof a[i-1] == 'undefined' ? v : {end: v.end - a[i-1].end, rate: v.rate});
const applyBrackets = (a, [c, ...r]) => Math.floor(a < c.end ? a * c.rate : c.end * c.rate + applyBrackets(a - c.end, r));


const getDeltaBrackets_verbose = brackets => 
	brackets.map((value, index, array) => 
		typeof array[index-1] == 'undefined' ? 							//check if this is the first bracket
			value : 													
			{end: value.end - array[index-1].end, rate: value.rate}		//subtract end of previous bracket
	);
const applyBrackets_verbose = (amount, [currentBracket, ...remainingBrackets]) => {
	let taxes = 0;
	if(amount < currentBracket.end){					//check whether this is the last bracket to be applied
		taxes += amount * currentBracket.rate;			//apply taxes to remaining amount
	} else {
		taxes += c.end * c.rate ;						//apply taxes to entire bracket
		taxes += applyBrackets(amount - currentBracket.end, remainingBrackets);			//recursion: subtract bracket end from amount and apply remaining brackets
	}
	return Math.floor(taxes);							//floor result (aka round down)
}

const overall = (taxrate, brackets, min = 0, previous = 0, bracket_passthrough) => {
	const [current, ...newBrackets] = brackets;									//chop off first bracket
	if(typeof current == 'undefined') return NaN;								//terminate after running through all brackets
	const max = current.end;		
	const total = (min*(taxrate - previous))/(current.rate - taxrate) + min;	//determine analytic solution in current bracket
	if((min <= total && total <= max) && !(min <= 0 && taxrate > 0)){			//check whether solution is actually in bracket
		return Math.round(total);												//eliminate floatingpoint imprecision
	} else {
		const b_passthrough = (typeof bracket_passthrough == 'undefined') ? brackets : bracket_passthrough;
		const prevTaxRate = applyBrackets(max, getDeltaBrackets(b_passthrough)) / max;
		return overall(taxrate, newBrackets, max, prevTaxRate, b_passthrough);	//iterate recursively
	}
}
console.log(overall(0, brackets));

const overall_b = (a,[d, ...r],m=0,p=0,c) => {
	if(typeof d == 'undefined') return NaN;
	const t = m * (a - p) / (d.rate - a) + m;
	if((m <= t && t <= d.end) &&!(m <= 0 && a > 0)){
		return Math.round(t);
	} else {
		const pt = typeof c == 'undefined' ? getDeltaBrackets([d, ...r]) : c;
		return overall_b(a,r,d.end,applyBrackets(d.end,pt)/d.end,pt);
	}
}

console.log(overall_b(0, brackets));
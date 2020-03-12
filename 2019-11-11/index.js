const yahtzee_upper = (...args) => {
	const count = args.reduce((acc, cur) => {
		acc[cur] = typeof acc[cur] == 'undefined' ? cur : acc[cur]+cur;
		return acc;
	}, {});
	return Math.max(...Object.values(count));
};

const yahtzee_upper_short = (...args) => Math.max(...Object.values(args.reduce((a,c)=>{a[c]=a[c]==null?c:a[c]+c;return a;},{})));

console.log(yahtzee_upper(2, 3, 5, 5, 6));
console.log(yahtzee_upper(6, 6, 6, 6, 6));
console.log(yahtzee_upper(1654, 1654, 50995, 30864, 1654, 50995, 22747, 1654, 1654, 1654, 1654, 1654, 30864, 4868, 1654, 4868, 1654, 30864, 4868, 30864));
console.log(yahtzee_upper_short(2, 3, 5, 5, 6));
console.log(yahtzee_upper_short(6, 6, 6, 6, 6));
console.log(yahtzee_upper_short(1654, 1654, 50995, 30864, 1654, 50995, 22747, 1654, 1654, 1654, 1654, 1654, 30864, 4868, 1654, 4868, 1654, 30864, 4868, 30864));
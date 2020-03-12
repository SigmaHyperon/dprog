const fRec = input => {
	const s = Array.from(input);
	for(let i = 0; i < s.length; i++){
		const fIndex = s.indexOf(s[i]);
		if(i > fIndex) return {index1: fIndex, index2: i, character: s[i]};
	}
};

console.log(fRec("ABBA"));
console.log(fRec("IKEUNFUVFV"));
console.log(fRec("PXLJOUDJVZGQHLBHGXIW"));
console.log(fRec('*l1J?)yn%R[}9~1"=k7]9;0[$'));
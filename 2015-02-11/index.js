const threes_r = start => {
	if(start <= 1)
	{
		logStep(start, null)
		return 1;
	}
	const rem = start % 3;
	if(rem == 0){
		logStep(start, 0);
		return threes(start / 3);
	}
	const offset = rem * 2 - 3;
	logStep(start, offset);
	return threes(start + offset);
}
const threes_l = start => {
	while (start > 1){
		const rem = start % 3;
		if(rem == 0){
			logStep(start, 0);
			start /= 3;
			continue;
		}
		const offset = rem * 2 - 3;
		logStep(start, offset);
		start += offset;
	}
	logStep(start, null)
}
const logStep = (start, remainder) => {
	console.log(start, remainder);
}
threes_l(31337357);
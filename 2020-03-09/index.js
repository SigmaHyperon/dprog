const nl = (s1, s2) => {
	for(let i = 0; i < s1.length; i++ ){
		s1 = s1.replace(/(\w)(\w*)/, "$2$1");
		if(s1 == s2) return true;
	}
	return false;
}
const nl_i = (s1, s2) => {
	for(let i = 0; i < s1.length; i++ ){
		s1 = s1.replace(/(\w)(\w*)/, "$2$1");
		if(s1 == s2) return i+1;
	}
	return i;
}
const repeat = (s1) => {
	return s1.length / nl_i(s1,s1);
}
console.log(repeat("abcabcabx"));
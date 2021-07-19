// решение наставника

const DEFAULT_BRACES = {
	')': '(',
	'}': '{',
	']': '['
};
const checkBraces = (str, braces = DEFAULT_BRACES) => {
	const stack = [];
	const openBraces = Object.values(braces);
	return !str.split('').some((item) => {
		if (openBraces.includes(item)) stack.push(item);
		else if (!stack.length || braces[item] !== stack.pop()) return true;
	}) && !stack.length;
};

console.log(checkBraces('(()[{()}][]())'));
console.log(checkBraces('((]{(}][]())'));
console.log(checkBraces('([)]')); 
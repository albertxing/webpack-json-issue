const WIDTH = 10;
const DEPTH = 7;
const BASE = {
	a: 1,
	b: 2,
	c: "str"
};

function generate(depth) {
	if (depth === 1) return BASE;
	const o = generate(depth - 1);
	return {
		a: new Array(WIDTH).fill(o),
		d: depth,
	}
}

const obj = generate(DEPTH);
const str = JSON.stringify(obj);

console.log(str);

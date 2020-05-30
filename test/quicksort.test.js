let { quickSort } = require("../quicksort.js");

describe("quicksort()", () => {
	it("Arg => int[] ASC", () => {
		expect(quickSort([2, 4, 1, 3])).toEqual(
			expect.arrayContaining([expect.any(Number)])
		);
	});

	it("Arg => int[] DESC", () => {
		expect(quickSort([2, 4, 1, 3], true)).toEqual(
			expect.arrayContaining([expect.any(Number)])
		);
	});

	it("base case [] empty", () => {
		expect(quickSort([])).toEqual([]);
	});

	it("base case [x] ASC", () => {
		expect(quickSort([8])).toEqual([8]);
	});

	it("base case [x] DESC", () => {
		expect(quickSort([8], true)).toEqual([8]);
	});

	it("DESC example1", () => {
		expect(quickSort([8, 2, 5, 1], true)).toEqual([8, 5, 2, 1]);
	});

	it("DESC example2", () => {
		expect(quickSort([8, 2, 5, 1], 1)).toEqual([8, 5, 2, 1]);
	});

	it("DESC example3", () => {
		expect(quickSort([8, 2, 5, 1], " ")).toEqual([8, 5, 2, 1]);
	});

	it("ASC example2", () => {
		expect(quickSort([8, 2, 5, 1], false)).toEqual([1, 2, 5, 8]);
	});

	it("ASC example2", () => {
		expect(quickSort([8, 2, 5, 1], 0)).toEqual([1, 2, 5, 8]);
	});

	it("ASC example3", () => {
		expect(quickSort([8, 2, 5, 1], "")).toEqual([1, 2, 5, 8]);
	});

	it("ASC example1", () => {
		expect(quickSort([8, 2, 5, 1], null)).toEqual([1, 2, 5, 8]);
	});

	it("ASC example1", () => {
		expect(quickSort([8, 2, 5, 1], undefined)).toEqual([1, 2, 5, 8]);
	});
});

// 1. INPUT
let BASE = [100]; // base case
let ARR = [40, 30, 10, 50, 20]; // recursion

// 2. ALGORITHM
function quickSort(arr, order) {
	let left = [];
	let right = [];
	let pivot = arr[0];
	let output = [];

	// IF "base case" ELSE "recursion"
	if (arr.length < 2) output = arr;
	else {
		for (let i = 1; i < arr.length; i++) {
			if (arr[i] < pivot) left[left.length] = arr[i];
			else right[right.length] = arr[i];
		}

		if (order) {
			output = [...quickSort(right, order), pivot, ...quickSort(left, order)]; // DESC
		} else {
			output = [...quickSort(left, order), pivot, ...quickSort(right, order)]; // ASC
		}
	}

	return output;
}

// 3. ARGUMENTS <= 1
// quickSort(array [, DESC order])
// quickSort(array [, Arg == true])
// ASC default Arg == false

// BASE CASE
let baseCase = quickSort(BASE); // !Arg

// ASC
let asc = quickSort(ARR); // !Arg
// let asc = quickSort(ARR, );
// let asc = quickSort(ARR, false);
// let asc = quickSort(ARR, 0);
// let asc = quickSort(ARR, "");
// let asc = quickSort(ARR, null);
// let asc = quickSort(ARR, undefined);

// DESC
let desc = quickSort(ARR, true);
// let desc = quickSort(ARR, 1);
// let desc = quickSort(ARR, " ");

console.log(baseCase);
console.log(asc);
console.log(desc);

// JEST / unit test
module.exports = { quickSort };

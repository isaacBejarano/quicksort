// ALGORITHM
function quickSort(arr, order) {
	let output = [];

	// IF "base case" ELSE "recursion"
	if (arr.length < 2) output = arr;
	else {
		let pivot = arr[0];
		let left = [];
		let right = [];
		for (let i = 1; i < arr.length; i++) {
			if (arr[i] < pivot) left[left.length] = arr[i];
			else right[right.length] = arr[i];
		}

		if (order) {
			output = quickSort(right, order).concat(pivot, quickSort(left, order)); // DESC
		} else {
			output = quickSort(left, order).concat(pivot, quickSort(right, order)); // ASC
		}
	}

	return output;
}

// ARGUMENTS <= 1
// quickSort(array [, Arg])
// Arg === false --> ASC default
// Arg === true  --> DESC

// BASE CASE
// let baseCase = quickSort(BASE); // !Arg

// ASC
// let asc = quickSort(ARR); // !Arg
// let asc = quickSort(ARR, );
// let asc = quickSort(ARR, false);
// let asc = quickSort(ARR, 0);
// let asc = quickSort(ARR, "");
// let asc = quickSort(ARR, null);
// let asc = quickSort(ARR, undefined);

// DESC
// let desc = quickSort(ARR, true);
// let desc = quickSort(ARR, 1);
// let desc = quickSort(ARR, " ");

// console.log(baseCase);
// console.log(asc);
// console.log(desc);

// TEST
// module.exports = { quickSort }; // uncomment to test

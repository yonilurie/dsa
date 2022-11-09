// Array for testing
let arr = [
	1,
	2,
	3,
	4,
	5,
	6,
	7,
	8,
	9,
	10,
	11,
	12,
	13,
	14,
	15,
	16,
	17,
	444,
	777,
	88777,
	434434,
];

//Recursive solution
function binarySearchRecursive(arr, target, left, right) {
	// If the left pointer is higher than the right pointer we have looked through the
	// entire list and not found the target
	if (left > right) return -1;
	//Find the mid point between the two pointers
	let mid = Math.round((left + right) / 2);
	// If the arr[mid] is equal to the target that means that we found our target and
	// can return the index
	if (arr[mid] === target) {
		return mid;
	}
	// If the arr[mid] is greater than the target that means we can rule out
	// the right side of the array and change that pointer to the midpoint
	else if (arr[mid] > target) {
		return binarySearchRecursive(arr, target, left, mid - 1);
	}
	// If the arr[mid] is lett than the target that means we can rule out
	// the left side of the array and change that pointer to the midpoint
	else {
		return binarySearchRecursive(arr, target, mid + 1, right);
	}
}

// Iterative solution
function binarySearchIterative(arr, target) {
	// Set pointer defining left bounds of arr
	let left = 0;
	// Set pointer defining right bounds of arr
	let right = arr.length - 1;
	// While the left pointer is = to or less than right pointer, perform search
	while (left <= right) {
		// Find midpoint between the left and right bounds
		let mid = Math.round((left + right) / 2);
		// Find the number at that index
		let curr = arr[mid];
		// If that is the target return the index
		if (curr === target) return mid;
		// If it is greater than the target that means the right side of the
		// array doesnt contain our number, so move the right bound to the midpoint
		else if (curr > target) right = mid - 1;
		// If it is less than the target that means the left side of the
		// array doesnt contain our number, so move the left bound to the midpoint
		else left = mid + 1;
	}
	// If the loop has been completed and no return occured then return -1 to indicate
	// The target is not in the arr
	return -1;
}

let recursiveResult = binarySearchRecursive(arr, 3333, 0, arr.length - 1);
console.log(recursiveResult);
let iterativeResult = binarySearchIterative(arr, 3333);
console.log(iterativeResult);

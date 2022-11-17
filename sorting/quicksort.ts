import { unsorted } from "../arrays";

const quicksort = (arr: number[]): number[] => {
	//Base case: if our arr is empty, we return it
	if (arr.length === 0) return [];
	// Declare smaller and larger array
	const smaller: number[] = [];
	const larger: number[] = [];
	// Declare a pivot, In this case it will be the first element
	const pivot: number = arr[0];
	// Loop through the array beginning at the second element,
	// This is becasue our pivot is the first element
	for (let i: number = 1; i < arr.length; i++) {
		// If the number at arr[i] is less than the pivot,
		// Push it to the smaller array
		if (arr[i] < pivot) smaller.push(arr[i]);
		else larger.push(arr[i]);
	}
	// Then we need to run quicksort on the smaller array
	// as well as on the larger array.
	// We should return the left side quicksorted, concat the pivot,
	// and then concat the right side quicksorted
	return quicksort(smaller).concat(pivot).concat(quicksort(larger));
};

console.log(quicksort(unsorted));

import { unsorted } from "../arrays";

const bubblesort = (arr: number[]): void => {
	// Loop through the entire array
	for (let i: number = 0; i < arr.length; i++) {
		// Initialize swapped variable, if this is false and inner loop completes
		// This means no elements were swapped and arr is sorted
		let swapped: boolean;
		// Loop through array and swap anytime an
		// element is larger than the one in front of it
		// Also set swapped to true to indicate a change has been made
		// and the array is not yet sorted
		for (let j: number = 0; j < arr.length - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				let temp: number = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
				swapped = true;
			}
		}
		// If the array has not been swapped at all
		if (!swapped) return;
	}
};

bubblesort(unsorted);
console.log(unsorted);

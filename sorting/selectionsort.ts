import { unsorted } from "../arrays";

const selectionsort = (arr: number[]): void => {
	// Loop through array
	for (let i: number = 0; i < arr.length - 1; i++) {
		//Track smallest number
		let idxOfSmallest: number = i;
		// Loop through array and check if there is a smaller number
		for (let j = i + 1; j < arr.length; j++) {
			// If you find a number smaller then track its index
			if (arr[j] < arr[idxOfSmallest]) idxOfSmallest = j;
		}
		// Swap the smallest number with the number we compared it too
		let temp: number = arr[idxOfSmallest];
		arr[idxOfSmallest] = arr[i];
		arr[i] = temp;
	}
};

selectionsort(unsorted);
console.log(unsorted);

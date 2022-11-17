import { unsorted } from "../arrays";

const mergesort = (arr: number[]): number[] => {
	// If the arrays length is 1 or less, return the arr
	if (arr.length <= 1) return arr;
	// Find the midpoint
	let halfPoint: number = Math.ceil(arr.length / 2);
	// The following recursive calls will split the array until one element is returned
	// and assigned to firsthalf,
	// A second element will be assigned to secondHalf
	// These two elements will be merged and sorted down the recursive stack
	// eventually being fully added together and sorted upon the call after all
	// subarrays have been sorted and joined
	//Slice first half of array and mergesort
	let firstHalf: number[] = mergesort(arr.splice(0, halfPoint));
	// slice second half of arr and mergesort
	let secondHalf: number[] = mergesort(arr.splice(-halfPoint));
	// merge with the two halves and return
	return merge(firstHalf, secondHalf);
};

//Merge helper function
const merge = (arr1: number[], arr2: number[]): number[] => {
	// Create return array
	let result: number[] = [];
	// Idx 'i' for arr1, Idx 'j' for arr2
	let i: number = 0;
	let j: number = 0;
	// Stop once one arrays length has been reached
	while (i < arr1.length && j < arr2.length) {
		if (arr1[i] > arr2[j]) {
			result.push(arr2[j]);
			j++;
		} else {
			result.push(arr1[i]);
			i++;
		}
	}
	// Push the rest of the array if it was not all pushed in previous while loop
	while (i < arr1.length) {
		result.push(arr1[i]);
		i++;
	}
	while (j < arr2.length) {
		result.push(arr2[j]);
		j++;
	}
	return result;
};

console.log(mergesort(unsorted));

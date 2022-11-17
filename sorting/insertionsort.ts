import { unsorted } from "../arrays";

const insertionsort = (arr: number[]): void => {
	// Loop through the array
	for (let i: number = 1; i < arr.length; i++) {
		//Set the key value which we will be comparing other nums to
		const key: number = arr[i];
		// Set second index which will be changing in our while loop
		// Initially this will be the number behind the key
		let j: number = i - 1;
		// Create a while loop to compare the value at j and the key
		// If it is larger move the element forward by one3
		// decrement j by one to check the element behind arr[j]
		while (j >= 0 && arr[j] > key) {
			arr[j + 1] = arr[j];
			j--;
		}
		//Set the element one idx after the while loop finished to the key
		arr[j + 1] = key;
	}
};

insertionsort(unsorted);
console.log(unsorted);

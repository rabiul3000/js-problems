// task 1 : Find the lowest number in the array below.

function taskOne(heights2) {
	let res = heights2[0];

	for (number of heights2) {
		if (number < res) {
			res = number;
		}
	}
	return res;
}

const task1Solution = taskOne([167, 190, 120, 165, 5]);
// console.log(task1Solution)

// Task 2: Find the friend with the smallest name.
function task2(heights2) {
	let result = heights2[0];

	for (item of heights2) {
		if (item.length < result.length) {
			result = item;
		}
	}
	return result;
}

const task2Solution = task2(['rahim', 'robin', 'rafi', 'ron', 'rashed']);
console.log(task2Solution);

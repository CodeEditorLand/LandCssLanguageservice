/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
"use strict";

/**
 * Takes a sorted array and a function p. The array is sorted in such a way that all elements where p(x) is false
 * are located before all elements where p(x) is true.
 * @returns the least x for which p(x) is true or array.length if no element fullfills the given function.
 */
export function findFirst<T>(array: T[], p: (x: T) => boolean): number {
	let low = 0,
		high = array.length;

	if (high === 0) {
		return 0; // no children
	}

	while (low < high) {
		let mid = Math.floor((low + high) / 2);

		if (p(array[mid])) {
			high = mid;
		} else {
			low = mid + 1;
		}
	}

	return low;
}

export function includes<T>(array: T[], item: T): boolean {
	return array.indexOf(item) !== -1;
}

export function union<T>(...arrays: T[][]): T[] {
	const result: T[] = [];

	for (const array of arrays) {
		for (const item of array) {
			if (!includes(result, item)) {
				result.push(item);
			}
		}
	}

	return result;
}

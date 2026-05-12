//https://leetcode.com/problems/merge-intervals/description/?envType=problem-list-v2&envId=array
/*
Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals,
and return an array of the non-overlapping intervals that cover all the intervals in the input.

Example 1:
Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
Example 2:

Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
Example 3:

Input: intervals = [[4,7],[1,4]]
Output: [[1,7]]
Explanation: Intervals [1,4] and [4,7] are considered overlapping.
 */

function mergeInterval(intervals) {

    if (!intervals || intervals.length === 0) {
        throw new Error("interval can not be merged");
    }

    // Sort intervals based on starting point
    intervals.sort((a, b) => a[0] - b[0]);

    const result = [];

    let currentInterval = intervals[0];

    for (let i = 1; i < intervals.length; i++) {

        let nextInterval = intervals[i];

        // Overlapping interval
        if (currentInterval[1] >= nextInterval[0]) {

            currentInterval[1] = Math.max(
                currentInterval[1],
                nextInterval[1]
            );

        } else {

            // Push merged interval
            result.push(currentInterval);

            // Move to next interval
            currentInterval = nextInterval;
        }
    }

    // Push the last interval
    result.push(currentInterval);

    return result;
}

console.log(
    mergeInterval([[1,3],[2,6],[8,10],[15,18]])
);
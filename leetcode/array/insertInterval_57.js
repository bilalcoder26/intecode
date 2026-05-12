//https://leetcode.com/problems/insert-interval/description/?envType=problem-list-v2&envId=array

/*
Example 1:
Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
Output: [[1,5],[6,9]]

Example 2:
Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
Output: [[1,2],[3,10],[12,16]]
Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].
 */

function insertInterval(intervals,newInterval){
    let result =[];
    let i=0;
    let n = intervals.length;
    while(i< n && intervals[i][1] < newInterval[0]){
        result.push(intervals[i]);
        i++;
    }
    while(i<n && intervals[i][0] <= newInterval[1]){
        newInterval[0] = Math.min(intervals[i][0], newInterval[0]);
        newInterval[1] = Math.max(intervals[i][1], newInterval[1]);
        i++;
    }
    result.push(newInterval);
    while(i<n){
        result.push(intervals[i]);
        i++;
    }
    return result;
}

console.log(insertInterval([[1,2],[3,5],[6,7],[8,10],[12,16]],[4,8]));
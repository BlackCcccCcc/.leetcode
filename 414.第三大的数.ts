/*
 * @lc app=leetcode.cn id=414 lang=typescript
 *
 * [414] 第三大的数
 */

// @lc code=start
function thirdMax(nums: number[]): number {
    const arr = [...new Set(nums)].sort((a, b) => b - a)
    return arr[2] ?? arr[0]
};


// @lc code=end
console.log(thirdMax([1,2,3,4,10,15]));


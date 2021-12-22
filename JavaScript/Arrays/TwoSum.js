// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.


// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]


// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.


// Follow-up: Can you come up with an algorithm that is less than O(n^2) time complexity?

// ===============================================

// const AddToTarget = (nums, target) => {
//     const mySet = new Set();
//     const result = []
//     for (let index = 0; index < nums.length; index++) {
//         const element = nums[index];
//         if (mySet.has(element)) {
//             result.push(index)
//         } else {
//             mySet.add(target - element)
//         }
//     }
//     return result
// }        // Didn't work, need to correct

// console.log(AddToTarget([2,7,11,15], 9))

// ==========================================

// nums = [2,7,11,15]
// nums = [3, 2, 4]
nums = [3,3]
// target = 9
target = 6

const AddToTarget2 = (nums, target) => {
    for (let i = 0; i < nums.length; i++) {
        const itemi = nums[i];
        for (let j = i+1; j < nums.length; j++) {
            const itemj = nums[j];
            if (itemi + itemj == target) {
                // console.log([i, j])
                return [i, j]
            }
        }
    }
    return false
}
console.log(AddToTarget2(nums, target))
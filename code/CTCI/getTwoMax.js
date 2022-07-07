const getTwoMax = (nums) => {
  if (!nums.length) return null;
  if (nums === 1) return nums[0];
  if (nums === 2) return nums;

  let first = Number.MIN_SAFE_INTEGER;
  let second = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > first) {
      second = first;
      first = nums[i];
    } else if (nums[i] > second) second = nums[i];
  }
  return [first, second];
};
let test = () => {
  let nums1 = [1, 2, 3, 4, 5];
  let nums2 = [-4, 1000, 10, 2, 118, 5, 1];
  let nums3 = [];
  let nums4 = [-10, -20, -30];
  // console.log(getTwoMax(nums1));
  console.log(getTwoMax(nums2));
  // console.log(getTwoMax(nums3));
  // console.log(getTwoMax(nums4));
};
test();

// let nums2 = [-4, 1000, 10, 2, 118, 5, 1];
//              ^
// first
// second
// first = -4
// second = first
// second = -4
// first = 1000
// second = 10
//

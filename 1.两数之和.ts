// 8.15
function twoSum(nums: number[], target: number): number[] {
  const len: number = nums.length;
  // 若数组小于2位，则直接返回空数组
  if (len > 1) {
    // 这里map第二个数不建议写成number，因为map.get方法会报错,第一次会存入undefined
    let map: Map<number, any> = new Map();
    for (let i = 0; i < len; i++) {
      const num = nums[i];
      // 取差值
      const diff = target - num;
      if (map.has(diff)) {
        // 若差值存在，则直接返回
        // map.get取出的会是符合条件的第一位数值索引，循环走到第二位符合条件时，索引为i
        return [map.get(diff), i];
      }
      // 循环至少会执行一次，第一次设置前map值为Map {}
      map.set(num, i);
      console.log(map);
    }
  }

  //这句不能漏，若都不符合条件，返回[]，也可以考虑抛出异常
  return [];
}
const a = twoSum([2, 4, 8, 12, 9], 17);
console.log(a);


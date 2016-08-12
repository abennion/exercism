module SumOfMultiples exposing (..)

{-
module.exports = nums => {
  this.nums = nums;
  return {
    to: max => {
      let mults = {};
      let i = 1;
      let loop = true;
      while (loop) {
        loop = false;
        for (let j = 0; j < this.nums.length; j++) {
          let v = this.nums[j] * i;
          if (v < max) {
            mults[v] = v;
            loop = true;
          }
        }
        i += 1;
      }
      return Object.keys(mults).reduce((r, e) => r + mults[e], 0);
    }
  };
};
-}

getMultiples nums max =

sumOfMultiples : List Int -> Int -> Int
sumOfMultiples nums max =
  let
    nums = 
  in
    List.sum nums

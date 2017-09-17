def slices(s, n):
    if not (1 <= n <= len(s)):
        raise ValueError()
    nums = map(lambda x: int(x), s)
    return [nums[i:i+n] for i in range(0, len(nums) - n + 1)]

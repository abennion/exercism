__english__ = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    30: "thirty",
    40: "forty",
    50: "fifty",
    60: "sixty",
    70: "seventy",
    80: "eighty",
    90: "ninety",
    100: "hundred",
    1000: "thousand",
    1000000: "million",
    1000000000: "billion"
}


def translate(num, lang):
    hundreds = int(num) / 100
    tens = int(num) % 100
    ones = tens % 10

    hundreds_text = u''.join([
        lang.get(hundreds),
        '.',
        lang.get(100)
    ])

    tens_text = ''

    if tens == 0:
        tens_text = ''
    elif tens < 20 or tens % 10 == 0:
        tens_text = lang.get(tens)
    else:
        tens_text = u''.join([
            lang.get(tens - ones),
            '-',
            lang.get(ones)
        ])

    if hundreds > 0:
        if tens > 0:
            return u''.join([
                hundreds_text,
                ' and ',
                tens_text
            ])
        else:
            return hundreds_text
    else:
        return tens_text


def chunk(num, len_):
    n = 10**len_
    x = num % n
    rest = ((num - x) / n) // 1
    if num >= n:
        return chunk(rest, len_) + [x]
    else:
        return [x]


def say(num):
    lang = __english__
    nums = chunk(num, 3)[::-1]
    print "nums: {0}".format(nums)
    qualifiers = [lang.get(1000**x) if x > 0 else ''
                  for x in range(0, len(nums))]
    print "qualifiers: {0}".format(qualifiers)
    # nums = zip(nums, [1000**n for n in range(1, len(nums) - 1)])
    print nums
    head, tail = nums[0], nums[1:]
    print head, tail
    # digits = map(int, list(str(num)))
    # res = ""
    # for dig, exp in zip(digits, range(0, len(digits))[::-1])[::-1]:
    #     print dig, exp
    #     res = "{0} {1}".format(__english__.get(dig * (10**exp)), res)
    # return res

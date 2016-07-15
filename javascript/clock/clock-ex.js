exports.at = function at(h, m = 0) {
    while (m < 0)   m += 60, h--;
    while (m >= 60) m -= 60, h++;
    while (h < 0)   h += 24;
    while (h >= 24) h -= 24;
    return {
        h: h,
        m: m,
        toString: () => format(h) + ':' + format(m),
        plus: m2 => at(h, m + m2),
        minus: m2 => at(h, m - m2),
        equals: other => other.h === h && other.m === m
    }
};

let format = n => (n < 10 ? '0' : '') + n;

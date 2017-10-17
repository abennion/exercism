def sum_of_multiples(n, factors):
    return sum(list(
        {x for x in xrange(0, n) if any(x % y == 0 for y in factors)}))

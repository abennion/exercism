def sieve(n):
    # borrowed from @sarahmau's solution
    return sorted(list(
        {x for x in xrange(2, n + 1) if not any(
            x % y == 0 for y in xrange(2, x))}))

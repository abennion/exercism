def sieve(n):
    primes = {2: True} if n > 1 else {}
    for i in xrange(2, n):
        for j in xrange(i + 1, n + 1):
            primes[j] = primes.get(j, True) and j % i != 0
    return map(lambda x: x[0], filter(lambda x: x[1], primes.items()))

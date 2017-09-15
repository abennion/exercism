def is_isogram(string):
    s = filter(lambda x: x.isalnum(), string.lower())
    dups = filter(lambda x: s.index(x[1]) != x[0], enumerate(s))
    return len(dups) == 0

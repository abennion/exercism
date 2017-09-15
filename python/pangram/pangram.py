def is_pangram(s):
    s = s.lower()
    r = filter(lambda x: x[1].isalpha() and s.find(x[1]) == x[0], enumerate(s))
    return len(r) == 26

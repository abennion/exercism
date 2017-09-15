def distance(a, b):
    if len(a) != len(b):
        raise ValueError()
    return len(filter(lambda x: x[0] != x[1], zip(a, b)))

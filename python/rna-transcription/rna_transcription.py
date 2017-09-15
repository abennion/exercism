def to_rna(s):
    m = {'G': 'C', 'C': 'G', 'T': 'A', 'A': 'U'}
    r = "".join(map(lambda x: m.get(x, ''), s))
    return r if len(r) == len(s) else ''

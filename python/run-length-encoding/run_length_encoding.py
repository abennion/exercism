import re


def decode(s):
    ms = re.finditer(r"(([0-9]*)([^0-9]))|.", s)
    gs = [(m.group(2), m.group(3)) for m in ms]
    ss = map(lambda x: int(x[0]) * x[1] if x[0].isdigit() else x[1], gs)
    return "".join(ss)


def encode(s):
    gs = [m.group(0) for m in re.finditer(r"([^0-9])\1*", s)]
    return "".join(map(lambda x: str(len(x)) + x[0] if len(x) > 1 else x, gs))

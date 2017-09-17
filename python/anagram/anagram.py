def isanagram(a, b):
    a = a.lower()
    b = b.lower()
    if a == b:
        return False
    else:
        return "".join(sorted(a)) == "".join(sorted(b))


def detect_anagrams(string, array):
    return filter(lambda x: isanagram(x, string), array)

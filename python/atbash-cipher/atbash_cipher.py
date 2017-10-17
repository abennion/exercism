def apply_key(ch):
    if ch.isalpha():
        return chr(122 - ord(ch.lower()) + 97)
    elif ch.isdigit():
        return ch
    return ''


def encode(string):
    s = decode(string)
    return " ".join([s[i:i + 5] for i in xrange(0, len(s), 5)])


def decode(string):
    return "".join(map(lambda x: apply_key(x), string))

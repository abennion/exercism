def apply_key(ch, key):
    if ch.isalpha():
        if ch.islower():
            return chr(((ord(ch) - 97 + key) % 26) + 97)
        else:
            return chr(((ord(ch) - 65 + key) % 26) + 65)
    return ch


def rotate(text, key):
    return "".join([apply_key(ch, key) for ch in text])

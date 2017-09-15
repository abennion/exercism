def word_count(s):
    chars = map(lambda x: x if x.isalnum() else " ", s.lower())
    words = "".join(chars).split(" ")
    words = filter(lambda x: x not in ["", " "], words)
    if not words:
        return {}
    else:
        d = word_count(" ".join(words[1:]))
        d[words[0]] = d.get(words[0], 0) + 1
        return d

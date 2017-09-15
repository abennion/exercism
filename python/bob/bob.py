def hey(string):
    s = string.strip()
    if s == "":
        return "Fine. Be that way!"
    elif s.isupper():
        return "Whoa, chill out!"
    elif s[-1] == "?":
        return "Sure."
    else:
        return "Whatever."

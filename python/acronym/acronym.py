def abbreviate(s):
    if not s:
        return s
    elif not s[0].isalpha():
        return abbreviate(s[1:])
    else:
        i = 0
        while i < len(s) and not s[i] in [" ", "-"]:
            i += 1
        return s[0].upper() + abbreviate(s[i:])


# # requires re
# def abbreviate(s):
#     return "".join([x[0].upper() for x in re.split(r"[ -]", s)])

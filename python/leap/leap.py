def is_leap_year(year):
    if not isinstance(year, (int, long)):
        return False
    else:
        if year % 4 == 0:
            if year % 400 == 0:
                return True
            if year % 100 == 0:
                return False
            return True

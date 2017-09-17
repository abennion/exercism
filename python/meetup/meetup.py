from datetime import date
import calendar


class MeetupDayException(Exception):
    pass


def meetup_day(year, month, day_name, descriptor):
    weekdays = dict(zip(list(calendar.day_name), range(0, 7)))
    descriptors = {"1st": 0, "2nd": 1, "3rd": 2, "4th": 3, "5th": 4}
    day = 1 + ((weekdays.get(day_name) - date(year, month, 1).weekday()) % 7)
    last_day = calendar.monthrange(year, month)[1]
    if descriptor == "teenth":
        while day + 7 < 20:
            day += 7
    elif descriptor == "last":
        while day + 7 <= last_day:
            day += 7
    else:
        day += 7 * descriptors[descriptor]
    if day > last_day:
        raise MeetupDayException()
    return date(year, month, day)

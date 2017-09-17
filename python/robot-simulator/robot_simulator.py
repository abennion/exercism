class NORTH(object):
    point = (0, 1)


class EAST(object):
    point = (1, 0)


class SOUTH(object):
    point = (0, -1)


class WEST(object):
    point = (-1, 0)


class Robot(object):
    def __init__(self, bearing=NORTH, x=0, y=0):
        self.bearings = [NORTH, EAST, SOUTH, WEST]
        while self.bearing != bearing:
            self.turn_right()
        self.point = (x, y)

    @property
    def coordinates(self):
        return self.point

    @property
    def bearing(self):
        return self.bearings[0]

    def turn_right(self):
        self.bearings = self.bearings[1:] + self.bearings[:1]

    def turn_left(self):
        self.bearings = self.bearings[-1:] + self.bearings[:-1]

    def advance(self):
        self.point = tuple(map(sum, zip(self.point, self.bearings[0].point)))

    def simulate(self, s):
        actions = {
            'A': self.advance,
            'R': self.turn_right,
            'L': self.turn_left
        }
        [actions.get(action, lambda x: None)() for action in list(s)]

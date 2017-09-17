class Allergies(object):

    def __init__(self, number):
        self.number = number
        self.allergies = {
            'eggs': 1,
            'peanuts': 2,
            'shellfish': 4,
            'strawberries': 8,
            'tomatoes': 16,
            'chocolate': 32,
            'pollen': 64,
            'cats': 128
        }

    def is_allergic_to(self, string):
        return self.number & self.allergies.get(string, 0) != 0

    @property
    def lst(self):
        return filter(lambda x: self.is_allergic_to(x), self.allergies.keys())

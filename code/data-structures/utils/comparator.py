from cv2 import compare


class Comparator(object):
    def __init__(self, compareFunction):
        self.compare = compareFunction or Comparator.defaultCompareFunction

    @staticmethod
    def defaultCompareFunction(a, b):
        if a == b:
            return 0
        return -1 if a < b else 1

    def equal(self, a, b):
        return self.compare(a, b) == 0

    def lessThan(self, a, b):
        return self.compare(a, b) < 0

    def greaterThan(self, a, b):
        return self.compare(a, b) > 0

    def lessThanOrEqual(self, a, b):
        return self.greaterThan(a, b) or self.equal(a, b)

    def switch(a, b):
        return b, a

    def reverse(self, a, b):
        compareOriginal = self.compare
        self.compare = self.switch(a, b)

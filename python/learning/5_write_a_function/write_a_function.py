#!/bin/python3

import sys

def is_leap(year):
    if year % 4 == 0:
        if year % 100 != 0:
            return True
        elif year % 400 == 0:
            return True
        return False
    return False


def main(year):
    print(is_leap(year))


if __name__ == '__main__':
    main(int(sys.argv[1]))
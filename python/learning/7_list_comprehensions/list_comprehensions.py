#!/bin/python3

import sys

def main(x, y, z, n):
    myList = [
        [a, b, c]
        for a in range(x+1)
        for b in range(y+1)
        for c in range(z+1) 
        if a+b+c != n
    ]
    print(myList)


if __name__ == '__main__':
    x = int(sys.argv[1])
    y = int(sys.argv[2])
    z = int(sys.argv[3])
    n = int(sys.argv[4])
    main(x, y, z, n)
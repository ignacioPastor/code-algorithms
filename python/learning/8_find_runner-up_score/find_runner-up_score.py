#!/bin/python3

import sys

def main(n, arr):
    myList = list(arr)
    myMax = max(myList)
    myListNoMax = [p for p in myList if p != myMax]
    print(max(myListNoMax))

if __name__ == '__main__':
    n = int(sys.argv[1])
    arr = map(int, sys.argv[2:])
    main(n, arr)

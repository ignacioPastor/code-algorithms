#!/bin/python3

def getSecondNames(l):
    # Get the second minimum value
    secMinValue = sorted(list(set(map(lambda e: e[1], l))))[1]
    # return the array of names with the second minimum value
    return sorted([p[0] for p in l if p[1] == secMinValue])


def main(l):
    result = getSecondNames(l)
    for nameSec in result:
        print(nameSec)


if __name__ == '__main__':
    myList = []
    for _ in range(int(input())):
        name = input()
        score = float(input())
        myList.append([name, score])
    main(myList)
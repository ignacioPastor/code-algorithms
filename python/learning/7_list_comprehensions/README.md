### Code Challege available at [Hackerrank](https://www.hackerrank.com/challenges/list-comprehensions/problem)
---
Let's learn about list comprehensions! You are given three integers `X`, `Y` and `Z` representing the dimensions of a cuboid along with an integer `N`. You have to print a list of all possible coordinates given by `(i, j, k)` on a 3D grid where the sum of `i + j + k` is not equal to `N`. Here, `0 <= i <= X; 0 <= j <= Y; 0 <= k <= Z` 

#### Input
Four integers `X`, `Y`, `Z` and `N` each on four separate lines, respectively.

### Output
Print the list in lexicographic increasing order.

#### Example
Input
```
1
1
1
2
```

Print
```
[[0, 0, 0], [0, 0, 1], [0, 1, 0], [1, 0, 0], [1, 1, 1]]
```

Input
```
2
2
2
2
```

Print
```
[[0, 0, 0], [0, 0, 1], [0, 1, 0], [0, 1, 2], [0, 2, 1], [0, 2, 2], [1, 0, 0], [1, 0, 2], [1, 1, 1], [1, 1, 2], [1, 2, 0], [1, 2, 1], [1, 2, 2], [2, 0, 1], [2, 0, 2], [2, 1, 0], [2, 1, 1], [2, 1, 2], [2, 2, 0], [2, 2, 1], [2, 2, 2]]
```

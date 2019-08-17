### Code Challege available at [Hackerrank](https://www.hackerrank.com/challenges/sock-merchant/problem?h_r=profile)
---
Given a `6 x 6` 2D Array, `arr`:
```
1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0
```
We define an hourglass in `A` to be a subset of values with indices falling in this pattern in `arr`'s graphical representation:
```
a b c
  d
e f g
```
There are `16` hourglasses in `arr`, and an hourglass sum is the sum of an hourglass' values. Calculate the hourglass sum for every hourglass in `arr`, then print the maximum hourglass sum.

For example, given the 2D array:
```
-9 -9 -9  1 1 1 
 0 -9  0  4 3 2
-9 -9 -9  1 2 3
 0  0  8  6 6 0
 0  0  0 -2 0 0
 0  0  1  2 4 0
 ```
 We calculate the following `16` hourglass values:
```
-63, -34, -9, 12, 
-10, 0, 28, 23, 
-27, -11, -2, 10, 
9, 17, 25, 18
```
Our highest hourglass value is `28` from the hourglass:
```
0 4 3
  1
8 6 6
```

### Function Description
`hourglassSum` should return an integer, the maximum hourglass sum in the array received.

#### Input Format
Each of the `6` lines of inputs `arr[i]` contains `6` space-separated integers `arr[i][j]`.

#### Output
Return the largest (maximum) hourglass sum found in `arr`.

#### Example
Input
```
1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0
0 0 2 4 4 0
0 0 0 2 0 0
0 0 1 2 4 0
```
Expected output: `19`

`19` is the result of the sum of the following hourglass
```
2 4 4
  2
1 2 4
```
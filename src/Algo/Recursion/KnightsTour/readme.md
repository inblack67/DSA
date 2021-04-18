1. You are given a number n, the size of a chess board.
2. You are given a row and a column, as a starting point for a knight piece.
3. You are required to generate the all moves of a knight starting in (row, col) such that knight visits
   all cells of the board exactly once.
4. Complete the body of printKnightsTour function - without changing signature - to calculate and
   print all configurations of the chess board representing the route
   of knight through the chess board. Use sample input and output to get more idea.

Note -> When moving from (r, c) to the possible 8 options give first precedence to (r - 2, c + 1) and
move in clockwise manner to
explore other options.
Note -> The online judge can't force you to write the function recursively but that is what the spirit of
question is. Write recursive and not iterative logic. The purpose of the question is to aid
learning recursion and not test you.
Input Format
A number n
A number row
A number col
Output Format
All configurations of the chess board representing route of knights through the chess board starting in (row, col)
Use displayBoard function to print one configuration of the board.
Constraints
n = 5
0 <= row < n
0 <= col < n
Sample Input
5
2
0

Sample Output
25 2 13 8 23
12 7 24 3 14
1 18 15 22 9
6 11 20 17 4
19 16 5 10 21

19 2 13 8 21

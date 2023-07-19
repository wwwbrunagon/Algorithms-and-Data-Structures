## grading-students :: HackerRank

[grading-students :: HackerRank](https://www.hackerrank.com/challenges/grading/problem?isFullScreen=true)

### HackerLand University has the following grading policy:

Every student receives a  in the inclusive range from  to .
Any  less than  is a failing grade.
Sam is a professor at the university and likes to round each student's  according to these rules:

* If the difference between the  and the next multiple of  is less than , round  up to the next multiple of .
* If the value of  is less than , no rounding occurs as the result will still be a failing grade.


#### Examples

* grade = 84 | round to  (85 - 84 is less than 3)
* grade = 29 | do not round (result is less than 40)
* grade = 57 | do not round (60 - 57 is 3 or higher)

Given the initial value of  for each of Sam's  students, write code to automate the rounding process.
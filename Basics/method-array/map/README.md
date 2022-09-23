## map
Applies (maps) a function on each element of the array and returns a
new array with the elements transformed by the function.

```
function f(num) {
return num + 1;
}

// NOK
['use', 'the', 'force'].map(f);

// OK
[1, 2, 3].map(f);
```
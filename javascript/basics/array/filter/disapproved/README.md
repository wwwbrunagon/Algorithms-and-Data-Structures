
## Exercise: Disapproved!

Given a list of objects that contain a student's name and their final grade,
create the 'approved' method that receives this list and returns only students
that were approved. </b>

For this, use the `filter` method.

```js
var students = [
  { name: 'Diogo', average: 5.5 },
  { name: 'Julia', average: 9.5 },
  { name: 'Roberto', average: 1.5 },
  { name: 'Tiago', average: 6.0 }
];
```

Example: approved(students, 6.5) → `[ { name: 'Julia', average: 9.5 } ]`
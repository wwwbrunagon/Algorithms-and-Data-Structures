SELECT
    id
  , name
  , countrycode
  , district
  , population
FROM city
WHERE countrycode = 'USA'
AND population > 100000;
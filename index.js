var names = [
  {name: "Josh Turner", id: 1},
  {name: "Guilume Cruz", id: 2},
  {name: "Ricky Ricardo", id:3}
];

names.sort(function (a, b) {
  if (a.name < b.name) {
    return  -1;
  } else if (a.name > b.name) {
    return 1;
  } else {
    return 0;
  }
});



var sum = function sum() {
  var result = 0;

  [10, 20, 30].forEach(function addTo(number) { result += number; });

  return result;
};

test('Lambdas.', function () {
  equal(sum(), 60,
    'result should be 60.');
});

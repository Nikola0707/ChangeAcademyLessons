// Function scope: Exploring Variable scope withing function

let calculateArea = function (length, width) {
  let area = length * width;

  // Check if the area is greater than 50 squere units
  if (area > 50) {
    let isLargeArea = true;
  }
  //   console.log("isLargeArea", isLargeArea); //ReferenceError: isLargeArea is not defined
  return area;
};

let areaOne = calculateArea(5, 10);
console.log("areaOne:", areaOne);

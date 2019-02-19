var triangle = (sideA, sideB, sideC){ if(isTriangle sideA, sideB, sideC))
{
  return tringleType(sideA, sideB, sideC)
} else {
  return "This is not a Triangle.";
  }
};
var triangleType = function(sideA, sideB,sideC){
  if(sideA===sideB, && sideB===sideC){
    return "equilateral";
  }
  else if(sideA===sideB|| sideA===sideC || sideC===sideB) {
    return "isosceles"
  }else {
    return "scalene";
  }
};
var is Triangle = function(sideA, sideB, sideC) {
  return sideA <=(sideB+sideC)&& sideB <=(sideC+sideA)&&sideC <=(sideA+sideB)
};
var sideA = ParseInt($("input#sideA").val());
var sideB = ParseInt($("input#sideB").val());
var sideC= ParseInt($("input#sideC").val());
var result =triangle(sideA, sideB, sideC)

const regression = require("regression")

async function regresseq(temp, Amparr) {
  if (temp.length !== Amparr.length) {
    console.error("Error: temp and Amparr lengths do not match.");
    return;
  }

  if (temp.some(isNaN) || Amparr.some(isNaN)) {
    console.error("Error: temp or Amparr contains invalid data.");
    return;
  }

//   const allSame = arr => arr.every(val => val === arr[0]);
//   if (allSame(temp) || allSame(Amparr)) {
//     console.error("Error: temp or Amparr contains constant values.");
//     return;
//   }
  let data = [];
  for(let i=0;i<temp.length;i++){
    data.push([parseFloat(Amparr[i]), parseFloat(temp[i])]);
  }
  const result = regression.linear(data);
  const gradient = result.equation[0];
  const intercept = result.equation[1];
    // console.log(data);
//   console.log(result);
//   console.log([gradient, intercept]);
  return [gradient, intercept];
}

async function predicttemp(temp, Amparr, Amp){
  let data = [];
  for(let i=0;i<temp.length;i++){
    data.push([parseFloat(Amparr[i]), parseFloat(temp[i])]);
  }
  const result = regression.linear(data);
  const res = result.predict(Amp);
  console.log(res);
  return res;
}

module.exports = {regresseq, predicttemp};

const _ = require("lodash");
const getDistance = ([x1, y1], [x2, y2]) => {
    const xs = x2 - x1;
    const ys = y2 - y1;
  
    return Math.sqrt(xs ** 2 + ys ** 2);
  };

// BEGIN
export const getTheNearestLocation = (locations, point) => {
  if(locations.length === 0){
    return null;
  }
  const arr = [];
  for(let i=0;i<locations.length;i++)
  {
    let [nameLoc, pointLoc] = locations[i];
    arr.push(getDistance(pointLoc, point));
  }
  let min = _.min(arr);
  for(let i=0;i<arr.length;i++)
  {
    if(min === arr[i])
    {
    return locations[i];
    }
  }
  // let minArr = Math.min(arr);
  // for(let i=0;i<arr.length;i++)
  // {
  //   if(minArr === arr[i])
  //   {
  //     return locations[i];
  //   }
  // }
}
// END

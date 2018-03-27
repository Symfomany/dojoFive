const temperatureZero = () => {
  // your code here...
  const tabCent = tableauTemp.filter(temp => Math.abs(temp) < 100);

  const moyenne = tabCent.reduce((a, b) => a + b, 0);

  let diff = Infinity;
  const tempNearZero = tabCent.map(element => {
    if(Math.abs(element) < diff){     
      diff = Math.abs(element);
    }
    return diff;
  }).reduce((a,b) => a=b,0);

  console.log(tempNearZero);
  console.log(moyenne);
}


let tableauTemp = [101, -101, 5, -5, 7.5, -44, 28,1000,4 ,3,-2, -1, -100];
temperatureZero();

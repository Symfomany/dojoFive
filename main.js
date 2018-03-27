const temperatureZero = () => {
  // your code here...
  const tabFiltre = tableauTemp.filter(Temp => Temp < 100 && Temp > -100);
  //console.log(tabFiltre);
  const tabFiltrePositif = tabFiltre.map(Temp => Math.abs(Temp));
  //console.log(tabFiltrePositif);
  const tabFiltreZero = tabFiltrePositif.sort((TempA, TempB) => {
    return TempA - TempB;
  });
  console.log(tabFiltre);
  const moyenne = tabFiltre.reduce((a, b) => a + b, 0);
  console.log(moyenne);
};

let tableauTemp = [101, -101, 5, -5, 7.5, -44, 28];
temperatureZero();
